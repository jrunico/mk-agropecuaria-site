import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PawPrint, Phone } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/business";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl border-b"
      style={{
        backgroundColor: "rgba(247, 244, 235, 0.82)",
        borderColor: "rgba(26, 41, 30, 0.06)",
      }}
      data-testid="site-navbar"
    >
      <div className="mk-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group" data-testid="nav-logo">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-[-6deg]"
            style={{ backgroundColor: "var(--mk-primary)" }}
          >
            <PawPrint size={20} color="#F7F4EB" strokeWidth={2.3} />
          </div>
          <div className="leading-tight">
            <div className="font-heading font-bold text-[17px]" style={{ color: "var(--mk-text-primary)" }}>
              MK Agropecuária
            </div>
            <div className="text-[11px] tracking-[0.18em] uppercase" style={{ color: "var(--mk-accent)" }}>
              & Pet Shop
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" data-testid="nav-links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#2E4A35] text-[#F7F4EB]"
                    : "text-[#1A291E] hover:bg-[#E5EAE3]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:+${BUSINESS.phoneDigits}`}
            className="flex items-center gap-2 text-sm font-semibold hover:text-[#C37353] transition-colors"
            style={{ color: "var(--mk-text-primary)" }}
            data-testid="nav-phone-link"
          >
            <Phone size={16} />
            {BUSINESS.phone}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mk-btn-primary text-sm"
            data-testid="nav-whatsapp-cta"
          >
            Fale no WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-full hover:bg-[#E5EAE3] transition"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t"
          style={{ borderColor: "rgba(26,41,30,0.08)" }}
          data-testid="nav-mobile-menu"
        >
          <div className="mk-container py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium ${
                    isActive ? "bg-[#2E4A35] text-[#F7F4EB]" : "hover:bg-[#E5EAE3]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mk-btn-primary text-sm justify-center mt-3"
              data-testid="nav-mobile-whatsapp"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
