import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/business";

const Produtos = () => {
  const [filter] = useState("Todos");

  return (
    <div data-testid="page-produtos">
      <section className="pt-16 lg:pt-24 pb-10">
        <div className="mk-container max-w-3xl">
          <span className="mk-overline">Nosso catálogo</span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.05] tracking-tight">
            Produtos sob consulta para seu pet e seu campo.
          </h1>

          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>
            Trabalhamos com diversas marcas e fornecedores confiáveis.
            Fale com a gente no WhatsApp para consultar disponibilidade, preços e promoções.
          </p>
        </div>
      </section>

      <section className="pb-24 pt-6">
        <div className="mk-container text-center">
          <h2 className="text-xl font-bold">Catálogo personalizado</h2>

          <p className="mt-2" style={{ color: "var(--mk-text-secondary)" }}>
            Cada cliente recebe atendimento individual para encontrar o melhor produto.
          </p>

          <a
            href={whatsappLink("Olá! Gostaria de consultar produtos disponíveis.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            style={{
              backgroundColor: "var(--mk-accent)",
              color: "white",
            }}
          >
            <MessageCircle size={15} />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Produtos;