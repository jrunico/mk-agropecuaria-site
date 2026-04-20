import { Link } from "react-router-dom";
import { Heart, Users, Leaf, ShieldCheck, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const VALUES = [
  { icon: Heart, title: "Acolhimento", desc: "Um espaço seguro e respeitoso para todas as pessoas e todos os pets." },
  { icon: Users, title: "Liderança Feminina", desc: "Feito por empreendedoras que colocam cuidado em cada detalhe." },
  { icon: Leaf, title: "Qualidade Real", desc: "Marcas que confiamos e usamos com os nossos próprios animais." },
  { icon: ShieldCheck, title: "Confiança", desc: "4,8 de nota no Google, 80+ avaliações e muitos clientes fiéis." },
];

const Sobre = () => {
  return (
    <div data-testid="page-sobre">
      <section className="pt-16 lg:pt-24 pb-16">
        <div className="mk-container grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="mk-overline">Nossa história</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.05] tracking-tight">
              A MK é casa. Para todos e todas.
            </h1>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>
              A Mk Agropecuária e Pet Shop nasceu em Ponta Grossa com um propósito que ia além de vender produtos: criar um espaço onde cuidado é o que vale mais. Somos uma empresa <strong>liderada por mulheres empreendedoras</strong>, orgulhosa de <strong>acolher a comunidade LGBTQ+</strong> e de atender com o mesmo carinho pets, tutores e produtores rurais.
            </p>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>
              Entre rações premium, banho e tosa e insumos para o campo, a gente escolhe cada produto pensando em quem vai levar pra casa — e em quem vai receber aquele carinho do outro lado.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img src="https://images.pexels.com/photos/8489037/pexels-photo-8489037.jpeg" alt="Sobre a MK" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#EFECE1" }}>
        <div className="mk-container">
          <div className="max-w-2xl">
            <span className="mk-overline">Nossos valores</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">
              O jeito MK de cuidar.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="mk-card p-7" data-testid={`value-${i}`}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "var(--mk-primary)" }}>
                  <v.icon size={20} color="#F7F4EB" />
                </div>
                <h3 className="font-heading text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mk-container grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--mk-accent)" }}>
              <Star size={22} color="#fff" fill="#fff" />
            </div>
            <div>
              <div className="font-heading text-4xl font-bold leading-none">{BUSINESS.rating.toString().replace('.', ',')}</div>
              <div className="text-sm mt-1" style={{ color: "var(--mk-text-secondary)" }}>Média de avaliação no Google</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--mk-primary)" }}>
              <Users size={22} color="#fff" />
            </div>
            <div>
              <div className="font-heading text-4xl font-bold leading-none">{BUSINESS.reviewsCount}+</div>
              <div className="text-sm mt-1" style={{ color: "var(--mk-text-secondary)" }}>Famílias que nos recomendam</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--mk-surface-muted)", border: "1px solid var(--mk-border)" }}>
              <Heart size={22} color="#C37353" fill="#C37353" />
            </div>
            <div>
              <div className="font-heading text-4xl font-bold leading-none">100%</div>
              <div className="text-sm mt-1" style={{ color: "var(--mk-text-secondary)" }}>Atendimento inclusivo e humano</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mk-container">
          <div className="rounded-[2rem] p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6" style={{ backgroundColor: "var(--mk-primary)", color: "#F7F4EB" }}>
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">Passe para um café — e para trazer o pet também.</h2>
              <p className="mt-3" style={{ color: "#D7DDD2" }}>Estamos na Nova Rússia, Ponta Grossa.</p>
            </div>
            <Link to="/contato" className="mk-btn-primary" data-testid="sobre-contact-cta">Como chegar</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
