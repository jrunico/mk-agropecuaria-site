import { Link } from "react-router-dom";
import { PawPrint, MapPin, Phone, Clock, Instagram, Heart } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const Footer = () => {
  return (
    <footer
      className="mt-24 pt-16 pb-8 border-t"
      style={{ borderColor: "var(--mk-border)", backgroundColor: "#EFECE1" }}
      data-testid="site-footer"
    >
      <div className="mk-container grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--mk-primary)" }}>
              <PawPrint size={20} color="#F7F4EB" strokeWidth={2.3} />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-[17px]">MK Agropecuária</div>
              <div className="text-[11px] tracking-[0.18em] uppercase" style={{ color: "var(--mk-accent)" }}>
                & Pet Shop
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>
            Pet shop e agropecuária em Ponta Grossa, feitos com carinho para sua família — de duas ou quatro patas.
          </p>
        </div>

        <div>
          <h4 className="mk-overline mb-4">Navegar</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#C37353] transition" data-testid="footer-link-inicio">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-[#C37353] transition" data-testid="footer-link-servicos">Serviços</Link></li>
            <li><Link to="/produtos" className="hover:text-[#C37353] transition" data-testid="footer-link-produtos">Produtos</Link></li>
            <li><Link to="/sobre" className="hover:text-[#C37353] transition" data-testid="footer-link-sobre">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-[#C37353] transition" data-testid="footer-link-contato">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mk-overline mb-4">Contato</h4>
          <ul className="space-y-3 text-sm" style={{ color: "var(--mk-text-secondary)" }}>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" />{BUSINESS.address}</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" />
              <a href={`tel:+${BUSINESS.phoneDigits}`} className="hover:text-[#C37353]" data-testid="footer-phone">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0" />
              <div>
                <div>{BUSINESS.hours.weekdays}</div>
                <div>{BUSINESS.hours.saturday}</div>
                <div>{BUSINESS.hours.sunday}</div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mk-overline mb-4">Redes</h4>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#C37353] transition"
            data-testid="footer-instagram"
          >
            <Instagram size={16} /> @mkagropet
          </a>
          <p className="text-xs mt-6" style={{ color: "var(--mk-text-secondary)" }}>
            Empresa que acolhe a comunidade LGBTQ+ · Empreendedoras
          </p>
        </div>
      </div>

      <div
        className="mk-container mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        style={{ borderColor: "var(--mk-border)", color: "var(--mk-text-secondary)" }}
      >
        <span>© {new Date().getFullYear()} MK Agropecuária e Pet Shop. Todos os direitos reservados.</span>
        <span className="flex items-center gap-1.5">Feito com <Heart size={13} color="#C37353" fill="#C37353" /> em Ponta Grossa</span>
      </div>
    </footer>
  );
};

export default Footer;
