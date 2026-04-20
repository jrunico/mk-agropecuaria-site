from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# --------- Models ---------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    phone: str = Field(..., min_length=6, max_length=40)
    email: Optional[EmailStr] = None
    subject: Optional[str] = Field(default=None, max_length=160)
    message: str = Field(..., min_length=5, max_length=2000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    subject: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# --------- Routes ---------
@api_router.get("/")
async def root():
    return {"message": "MK Agropecuária API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(payload: ContactMessageCreate):
    obj = ContactMessage(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    try:
        await db.contact_messages.insert_one(doc)
    except Exception as e:
        logging.exception("Failed to insert contact message")
        raise HTTPException(status_code=500, detail="Falha ao salvar mensagem") from e
    return obj


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contacts(limit: int = 100):
    rows = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.get("/business-info")
async def business_info():
    return {
        "name": "Mk Agropecuária e Pet Shop",
        "address": "R. Bento Ribeiro, 1177 - sala 2 - Nova Rússia, Ponta Grossa - PR, 84070-350",
        "phone": "(42) 99946-2309",
        "phone_digits": "5542999462309",
        "hours": {
            "weekdays": "08:00 - 19:00",
            "saturday": "08:00 - 17:00",
            "sunday": "Fechado",
        },
        "rating": 4.8,
        "reviews_count": 80,
        "features": [
            "Empresa que acolhe a comunidade LGBTQ+",
            "Empresa de empreendedoras",
        ],
        "services": [
            "Banho e tosa",
            "Produtos pet (ração, brinquedos)",
            "Produtos agropecuários",
            "Compras na loja",
            "Retirada na loja",
            "Entrega",
        ],
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
