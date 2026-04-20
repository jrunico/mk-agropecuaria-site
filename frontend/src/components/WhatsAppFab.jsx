import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/business";

export const WhatsAppFab = () => {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 mk-pulse rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
      style={{
        backgroundColor: "var(--mk-success)",
        width: 60,
        height: 60,
      }}
      data-testid="whatsapp-fab"
    >
      <MessageCircle size={28} color="#fff" strokeWidth={2.2} />
    </a>
  );
};

export default WhatsAppFab;
