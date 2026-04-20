import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL') or open('/app/frontend/.env').read().split('REACT_APP_BACKEND_URL=')[1].split('\n')[0].strip()
API = f"{BASE_URL.rstrip('/')}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Baseline status
class TestStatus:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        assert "message" in r.json()

    def test_status_create_and_list(self, client):
        r = client.post(f"{API}/status", json={"client_name": "TEST_pytest"})
        assert r.status_code == 200
        data = r.json()
        assert data["client_name"] == "TEST_pytest"
        assert "id" in data and "_id" not in data
        r2 = client.get(f"{API}/status")
        assert r2.status_code == 200
        rows = r2.json()
        assert isinstance(rows, list)
        assert any(x.get("client_name") == "TEST_pytest" for x in rows)
        for x in rows:
            assert "_id" not in x


# Business info
class TestBusinessInfo:
    def test_business_info(self, client):
        r = client.get(f"{API}/business-info")
        assert r.status_code == 200
        d = r.json()
        assert d["name"] == "Mk Agropecuária e Pet Shop"
        assert d["phone"] == "(42) 99946-2309"
        assert d["phone_digits"] == "5542999462309"
        assert d["rating"] == 4.8
        assert d["reviews_count"] == 80
        assert isinstance(d.get("services"), list) and len(d["services"]) >= 4


# Contact endpoint
class TestContact:
    def test_create_contact_minimum(self, client):
        payload = {
            "name": "TEST_Cliente Minimo",
            "phone": "42999999999",
            "message": "Mensagem de teste minimo do pytest",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["name"] == payload["name"]
        assert d["phone"] == payload["phone"]
        assert d["message"] == payload["message"]
        assert d.get("email") is None
        assert d.get("subject") is None
        assert "id" in d and "_id" not in d
        assert "created_at" in d

    def test_create_contact_full(self, client):
        payload = {
            "name": "TEST_Cliente Cheio",
            "phone": "(42) 99946-2309",
            "email": "test@example.com",
            "subject": "Banho e tosa",
            "message": "Gostaria de agendar banho e tosa para meu pet.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["email"] == "test@example.com"
        assert d["subject"] == "Banho e tosa"
        assert "_id" not in d
        return d["id"]

    def test_list_contacts_no_id_leak(self, client):
        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        assert len(rows) >= 1
        for row in rows:
            assert "_id" not in row
            assert "id" in row
        # latest should appear (sorted desc by created_at)
        names = [x.get("name") for x in rows]
        assert any(n and n.startswith("TEST_") for n in names)

    def test_validation_missing_required(self, client):
        # missing message
        r = client.post(f"{API}/contact", json={"name": "Ana", "phone": "42999999999"})
        assert r.status_code == 422
        # missing name
        r = client.post(f"{API}/contact", json={"phone": "42999999999", "message": "Olá tudo bem?"})
        assert r.status_code == 422
        # missing phone
        r = client.post(f"{API}/contact", json={"name": "Ana", "message": "Olá tudo bem?"})
        assert r.status_code == 422

    def test_validation_too_short(self, client):
        # name too short
        r = client.post(f"{API}/contact", json={"name": "A", "phone": "42999999999", "message": "Olá tudo bem?"})
        assert r.status_code == 422
        # message too short
        r = client.post(f"{API}/contact", json={"name": "Ana", "phone": "42999999999", "message": "oi"})
        assert r.status_code == 422

    def test_validation_invalid_email(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "Ana Teste", "phone": "42999999999",
            "message": "Olá tudo bem?", "email": "not-an-email"
        })
        assert r.status_code == 422
