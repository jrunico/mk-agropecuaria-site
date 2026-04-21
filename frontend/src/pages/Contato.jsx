import { useState } from "react";
import axios from "axios";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, Instagram } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/business";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Contato = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.phone.trim().length < 6 || form.message.trim().length < 5) {
      toast.error("Preencha nome, telefone e mensagem.");
      return;
    }
    setSending(true);
    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      };
      if (form.email.trim()) payload.email = form.email.trim();
      if (form.subject.trim()) payload.subject = form.subject.trim();
      await axios.post(`${API}/contact`, payload);
      setSent(true);
      toast.success("Mensagem enviada! Retornaremos em breve.");
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Não foi possível enviar. Tente novamente pelo WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="page-contato">
      <section className="pt-16 lg:pt-24 pb-10">
        <div className="mk-container max-w-3xl">
          <span className="mk-overline">Fale com a MK</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.05] tracking-tight">
            Estamos aqui pra te atender.
          </h1>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--mk-text-secondary)" }}>
            Envie uma mensagem, ligue ou chame no WhatsApp. Seja para um agendamento de banho e tosa, uma dúvida sobre ração ou um pedido de insumo para o campo — a gente responde com carinho.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mk-container grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="mk-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--mk-surface-muted)" }}>
                  <MapPin size={18} color="#2E4A35" />
                </div>
                <div>
                  <div className="mk-overline" style={{ fontSize: "0.7rem" }}>Endereço</div>
                  <div className="font-semibold mt-1">{BUSINESS.address}</div>
                </div>
              </div>
            </div>

            <div className="mk-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--mk-surface-muted)" }}>
                  <Phone size={18} color="#2E4A35" />
                </div>
                <div>
                  <div className="mk-overline" style={{ fontSize: "0.7rem" }}>Telefone / WhatsApp</div>
                  <a href={`tel:+${BUSINESS.phoneDigits}`} className="font-semibold mt-1 block hover:text-[#C37353]" data-testid="contato-phone-link">{BUSINESS.phone}</a>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm font-semibold" style={{ color: "var(--mk-accent)" }} data-testid="contato-whatsapp-link">
                    Abrir conversa no WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            <div className="mk-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--mk-surface-muted)" }}>
                  <Clock size={18} color="#2E4A35" />
                </div>
                <div>
                  <div className="mk-overline" style={{ fontSize: "0.7rem" }}>Horário</div>
                  <div className="mt-1 text-sm space-y-0.5">
                    <div>{BUSINESS.hours.weekdays}</div>
                    <div>{BUSINESS.hours.saturday}</div>
                    <div>{BUSINESS.hours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mk-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--mk-surface-muted)" }}>
                  <Instagram size={18} color="#2E4A35" />
                </div>
                <div>
                  <div className="mk-overline" style={{ fontSize: "0.7rem" }}>Redes sociais</div>
                  <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="font-semibold mt-1 block hover:text-[#C37353]">@mkagropet</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video shadow-lg">
              <iframe
                title="Mapa MK"
                src={BUSINESS.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                data-testid="contato-map"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={submit} className="mk-card p-8 lg:p-10" data-testid="contact-form">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold">Envie uma mensagem</h2>
              <p className="text-sm mt-2" style={{ color: "var(--mk-text-secondary)" }}>Preencha o formulário abaixo e retornamos o mais rápido possível.</p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <Field label="Seu nome" required>
                  <input
                    value={form.name}
                    onChange={update("name")}
                    className="mk-input"
                    placeholder="Como podemos te chamar?"
                    data-testid="contact-input-name"
                    required
                  />
                </Field>
                <Field label="Telefone / WhatsApp" required>
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    className="mk-input"
                    placeholder="(42) 9 9999-9999"
                    data-testid="contact-input-phone"
                    required
                  />
                </Field>
                <Field label="E-mail (opcional)">
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className="mk-input"
                    placeholder="seu@email.com"
                    data-testid="contact-input-email"
                  />
                </Field>
                <Field label="Assunto (opcional)">
                  <input
                    value={form.subject}
                    onChange={update("subject")}
                    className="mk-input"
                    placeholder="Ex: Banho e tosa, Ração..."
                    data-testid="contact-input-subject"
                  />
                </Field>
              </div>

              <Field label="Mensagem" required className="mt-4">
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  className="mk-input resize-none"
                  placeholder="Conta pra gente como podemos te ajudar..."
                  data-testid="contact-input-message"
                  required
                />
              </Field>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs" style={{ color: "var(--mk-text-secondary)" }}>
                  Ao enviar, você concorda em ser contatado(a) pela MK Agropecuária.
                </p>
                <button
                  type="submit"
                  className="mk-btn-primary disabled:opacity-70"
                  disabled={sending}
                  data-testid="contact-submit"
                >
                  {sent ? <><CheckCircle2 size={18} /> Enviado</> : sending ? "Enviando..." : (<><Send size={16} /> Enviar mensagem</>)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .mk-input {
          width: 100%;
          background-color: var(--mk-bg);
          border: 1px solid var(--mk-border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          font-family: inherit;
          color: var(--mk-text-primary);
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .mk-input::placeholder { color: #8B9A8F; }
        .mk-input:focus {
          outline: none;
          border-color: var(--mk-accent);
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(195,115,83,0.18);
        }
      `}</style>
    </div>
  );
};

const Field = ({ label, required, children, className = "" }) => (
  <label className={`block ${className}`}>
    <span className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--mk-text-secondary)" }}>
      {label}{required && <span style={{ color: "var(--mk-accent)" }}> *</span>}
    </span>
    <div className="mt-2">{children}</div>
  </label>
);

export default Contato;
