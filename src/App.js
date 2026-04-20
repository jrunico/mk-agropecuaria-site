import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

import Home from "@/pages/Home";
import Servicos from "@/pages/Servicos";
import Produtos from "@/pages/Produtos";
import Sobre from "@/pages/Sobre";
import Contato from "@/pages/Contato";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFab />
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              fontFamily: "Manrope, sans-serif",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
