import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, PawPrint, Leaf, Truck, ShoppingBag, ShieldCheck, Heart } from "lucide-react";
import Stars from "@/components/Stars";
import { BUSINESS, SERVICES, REVIEWS, whatsappLink } from "@/lib/business";

const HERO_IMG = "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1400";

const Home = () => {
  return (
    <div data-testid="page-home">
      {/* HERO */}
      <section className="relative overflow-hidden" data-testid="hero-section">
        <div className="mk-container grid lg:grid-cols-12 gap-10 pt-12 lg:pt-20 pb-16 lg:pb-24">
          <div className="lg:col-span-7 flex flex-col justify-center mk-fade-up">
            <span className="mk-overline mb-5">Ponta Grossa · Nova Rússia</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight" style={{ color: "var(--mk-text-primary)" }}>
              Cuidado de verdade para <span style={{ color: "var(--mk-accent)" }}>quem você ama</span> — de duas ou quatro patas.
            </h1>
            <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: "var(--mk-text-secondary)" }}>
              Pet shop, banho e tosa, rações premium e produtos agropecuários com atendimento humano e preços justos. Uma casa feita por empreendedoras, que acolhe todo mundo.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mk-btn-primary" data-testid="hero-whatsapp-cta">
                Falar no WhatsApp <ArrowRight size={18} />
              </a>
              <Link to="/servicos" className="mk-btn-secondary" data-testid="hero-services-cta">
                Ver serviços
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 mk-fade-up mk-d-2">
              <div className="flex items-center gap-3">
                <Stars value={BUSINESS.rating} size={18} />
                <div>
                  <div className="font-bold text-lg font-heading leading-none">{BUSINESS.rating.toString().replace('.', ',')}/5</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--mk-text-secondary)" }}>{BUSINESS.reviewsCount} avaliações no Google</div>
                </div>
              </div>
              <div className="h-10 w-px" style={{ backgroundColor: "var(--mk-border)" }} />
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--mk-text-secondary)" }}>
                <Clock size={16} /> Aberto até 19:00
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mk-fade-up mk-d-2">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img src={HERO_IMG} alt="Pet feliz sendo cuidado na MK" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(46,74,53,0.0) 40%, rgba(26,41,30,0.55) 100%)" }} />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div
                  className="rounded-2xl px-4 py-3 backdrop-blur-md"
                  style={{ backgroundColor: "rgba(247,244,235,0.92)" }}
                  data-testid="hero-rating-card"
                >
                  <div className="flex items-center gap-2">
                    <Stars value={5} size={14} />
                    <span className="font-heading font-bold">4,8</span>
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--mk-text-secondary)" }}>80+ avaliações reais</div>
                </div>
                <div
                  className="rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-1.5"
                  style={{ backgroundColor: "var(--mk-accent)", color: "#fff" }}
                >
                  <Heart size={14} fill="#fff" /> Inclusivo
                </div>
              </div>
            </div>
            {/* floating pill */}
            <div
              className="hidden lg:flex absolute -left-6 top-8 rounded-2xl px-4 py-3 shadow-xl items-center gap-3"
              style={{ backgroundColor: "#fff", border: "1px solid var(--mk-border)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--mk-surface-muted)" }}>
                <Truck size={18} color="#2E4A35" />
              </div>
              <div>
                <div className="text-xs mk-overline" style={{ color: "var(--mk-primary)" }}>Entrega</div>
                <div className="text-sm font-semibold">Ponta Grossa e região</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP */}
      <section className="border-y" style={{ borderColor: "var(--mk-border)", backgroundColor: "#EFECE1" }}>
        <div className="mk-container grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {[
            { icon: ShoppingBag, label: "Compras na loja" },
            { icon: Truck, label: "Entrega em domicílio" },
            { icon: PawPrint, label: "Banho e tosa" },
            { icon: Leaf, label: "Agropecuária" },
          ].map((h, i) => (
            <div key={i} className="flex items-center gap-3" data-testid={`highlight-${i}`}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#fff", border: "1px solid var(--mk-border)" }}>
                <h.icon size={18} color="#2E4A35" />
              </div>
              <span className="text-sm font-semibold">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 lg:py-28" data-testid="services-section">
        <div className="mk-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div>
              <span className="mk-overline">O que fazemos</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight max-w-2xl">
                Tudo que o seu pet e o seu sítio precisam, em um só lugar.
              </h2>
            </div>
            <Link to="/servicos" className="mk-btn-secondary self-start" data-testid="services-view-all">
              Ver todos serviços <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.slice(0, 4).map((s, i) => (
              <article key={s.slug} className="mk-card overflow-hidden mk-fade-up" style={{ animationDelay: `${i * 0.08}s` }} data-testid={`service-card-${s.slug}`}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--mk-primary)" }} data-testid="about-teaser">
        <div className="mk-container grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] overflow-hidden aspect-square shadow-2xl">
              <img src="https://images.pexels.com/photos/8489037/pexels-photo-8489037.jpeg" alt="Equipe acolhedora" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 text-[#F7F4EB]">
            <span className="mk-overline" style={{ color: "#E3A887" }}>Sobre a MK</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">
              Uma agropecuária feita por empreendedoras, feita para todo mundo.
            </h2>
            <p className="mt-6 text-base lg:text-lg leading-relaxed" style={{ color: "#D7DDD2" }}>
              Desde o início, a MK nasceu com uma missão simples: acolher. Acolher o tutor que quer o melhor para o seu pet, o produtor que confia em quem trabalha com a terra e qualquer pessoa, vinda de onde for. Somos uma empresa que respeita e valoriza a comunidade LGBTQ+, liderada por mulheres que fazem do cuidado o diferencial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full px-4 py-2 text-sm flex items-center gap-2" style={{ backgroundColor: "rgba(247,244,235,0.08)", border: "1px solid rgba(247,244,235,0.18)" }}>
                <Heart size={14} color="#E3A887" /> Acolhemos a comunidade LGBTQ+
              </span>
              <span className="rounded-full px-4 py-2 text-sm flex items-center gap-2" style={{ backgroundColor: "rgba(247,244,235,0.08)", border: "1px solid rgba(247,244,235,0.18)" }}>
                <ShieldCheck size={14} color="#E3A887" /> Empreendedoras
              </span>
            </div>
            <Link to="/sobre" className="inline-flex items-center gap-2 mt-8 font-semibold hover:gap-3 transition-all" style={{ color: "#E3A887" }} data-testid="about-teaser-link">
              Conheça nossa história <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 lg:py-28" data-testid="reviews-section">
        <div className="mk-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="mk-overline">Quem nos conhece, recomenda</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight max-w-2xl">
                4,8 estrelas no Google. E mais de 80 famílias felizes.
              </h2>
            </div>
            <div className="flex items-center gap-4 rounded-2xl p-4" style={{ backgroundColor: "#fff", border: "1px solid var(--mk-border)" }}>
              <div className="text-5xl font-heading font-bold">{BUSINESS.rating.toString().replace('.', ',')}</div>
              <div>
                <Stars value={BUSINESS.rating} size={16} />
                <div className="text-xs mt-1" style={{ color: "var(--mk-text-secondary)" }}>{BUSINESS.reviewsCount} avaliações · Google</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <article key={i} className="mk-card p-6 flex flex-col" data-testid={`review-card-${i}`}>
                <Stars value={r.stars} />
                <p className="mt-4 text-sm leading-relaxed flex-1" style={{ color: "var(--mk-text-primary)" }}>
                  “{r.text}”
                </p>
                <div className="mt-5 pt-4 border-t" style={{ borderColor: "var(--mk-border)" }}>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--mk-text-secondary)" }}>{r.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / LOCATION */}
      <section className="pb-24">
        <div className="mk-container">
          <div className="rounded-[2rem] overflow-hidden grid lg:grid-cols-2" style={{ backgroundColor: "var(--mk-surface-muted)" }}>
            <div className="p-10 lg:p-14">
              <span className="mk-overline">Venha nos visitar</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-3 tracking-tight">
                Te esperamos na Nova Rússia.
              </h2>
              <div className="mt-6 space-y-3 text-sm" style={{ color: "var(--mk-text-primary)" }}>
                <div className="flex gap-3 items-start">
                  <MapPin size={18} className="mt-0.5" />
                  <span>{BUSINESS.address}</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock size={18} className="mt-0.5" />
                  <div>
                    <div>{BUSINESS.hours.weekdays}</div>
                    <div>{BUSINESS.hours.saturday}</div>
                    <div>{BUSINESS.hours.sunday}</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mk-btn-primary" data-testid="cta-whatsapp">
                  Falar no WhatsApp
                </a>
                <Link to="/contato" className="mk-btn-secondary" data-testid="cta-contact">Enviar mensagem</Link>
              </div>
            </div>
            <div className="min-h-[280px] lg:min-h-0">
              <iframe
                title="Mapa MK Agropecuária"
                src={BUSINESS.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="cta-map"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
