import { Link } from "react-router-dom";
import { ArrowRight, Check, Bath, PawPrint, Leaf, Truck } from "lucide-react";
import { SERVICES, whatsappLink } from "@/lib/business";

const ICONS = { Bath, PawPrint, Leaf, Truck };

const Servicos = () => {
  return (
    <div data-testid="page-servicos">
      <section className="pt-16 lg:pt-24 pb-10">
        <div className="mk-container max-w-3xl">
          <span className="mk-overline">Nossos serviços</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.05] tracking-tight">
            Cuidado, qualidade e conveniência para sua família.
          </h1>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>
            Do banho daquele momento especial à ração premium do mês, passando pelos insumos do sítio: a MK é a sua agropecuária completa em Ponta Grossa.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mk-container space-y-16">
          {SERVICES.map((s, idx) => {
            const Icon = ICONS[s.icon] || PawPrint;
            const reversed = idx % 2 === 1;
            return (
              <article key={s.slug} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center" data-testid={`servico-${s.slug}`}>
                <div className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}>
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "var(--mk-surface-muted)" }}>
                    <Icon size={22} color="#2E4A35" />
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>
                    {s.description}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check size={18} color="#C37353" className="shrink-0 mt-0.5" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <a
                      href={whatsappLink(`Olá! Gostaria de mais informações sobre: ${s.title}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mk-btn-primary"
                      data-testid={`servico-cta-${s.slug}`}
                    >
                      Agendar pelo WhatsApp <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="mk-container">
          <div className="rounded-[2rem] p-10 lg:p-14 text-center" style={{ backgroundColor: "var(--mk-primary)", color: "#F7F4EB" }}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">Não encontrou o que procurava?</h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "#D7DDD2" }}>
              Fale com a gente! Se você precisa de um produto ou serviço específico, é bem provável que a gente consiga resolver.
            </p>
            <div className="mt-8">
              <Link to="/contato" className="mk-btn-primary" data-testid="servicos-contact-cta">
                Fale com a MK
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
