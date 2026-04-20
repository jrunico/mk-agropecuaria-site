import { useMemo, useState } from "react";
import { MessageCircle, Filter } from "lucide-react";
import { PRODUCTS, whatsappLink } from "@/lib/business";

const FILTERS = ["Todos", "Pet", "Agro"];

const Produtos = () => {
  const [filter, setFilter] = useState("Todos");
  const list = useMemo(
    () => (filter === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div data-testid="page-produtos">
      <section className="pt-16 lg:pt-24 pb-10">
        <div className="mk-container max-w-3xl">
          <span className="mk-overline">Nosso catálogo</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.05] tracking-tight">
            Produtos selecionados para o seu pet e para o seu campo.
          </h1>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>
            Marcas de confiança, preços que cabem no bolso e aquele atendimento que te ajuda a escolher o melhor. Fale com a gente pelo WhatsApp para ver disponibilidade e promoções.
          </p>
        </div>
      </section>

      <section className="pb-6">
        <div className="mk-container flex flex-wrap items-center gap-3">
          <Filter size={16} />
          <span className="text-sm font-semibold uppercase tracking-[0.18em] mr-2" style={{ color: "var(--mk-text-secondary)" }}>Filtrar</span>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-testid={`filter-${f.toLowerCase()}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                filter === f ? "bg-[#2E4A35] text-[#F7F4EB]" : "bg-white hover:bg-[#E5EAE3]"
              }`}
              style={filter !== f ? { border: "1px solid var(--mk-border)" } : {}}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24 pt-6">
        <div className="mk-container grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((p, i) => (
            <article key={i} className="mk-card overflow-hidden flex flex-col" data-testid={`product-card-${i}`}>
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="mk-overline" style={{ fontSize: "0.7rem" }}>{p.category === "Pet" ? "Pet Shop" : "Agropecuária"}</span>
                <h3 className="font-heading text-lg font-bold mt-2 leading-tight">{p.name}</h3>
                <div className="mt-3 text-sm font-semibold" style={{ color: "var(--mk-accent)" }}>{p.price}</div>
                <a
                  href={whatsappLink(`Olá! Tenho interesse no produto: ${p.name}. Pode me passar mais informações?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all hover:bg-[#25D366] hover:text-white"
                  style={{ backgroundColor: "var(--mk-surface-muted)", color: "var(--mk-primary)" }}
                  data-testid={`product-whatsapp-${i}`}
                >
                  <MessageCircle size={15} /> Consultar no WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Produtos;
