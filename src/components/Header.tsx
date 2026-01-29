import { useState } from "react";
import { Menu, X } from "lucide-react";
import barberoLogo from "@/assets/barbero-logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Localização", href: "#localizacao" },
    { label: "Assinatura", href: "#assinatura" },
    { label: "Valores", href: "#valores" },
    { label: "Promoções", href: "#promocoes" },
  ];

  return (
    <header className="bg-brand-bg relative !border-0 !shadow-none !ring-0">
      {/* FAIXA FIXA NO TOPO */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-32 flex items-center justify-between">
          {/* LOGO CANTO ESQUERDO */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={barberoLogo}
              alt="O Barbero Logo"
              className="h-36 md:h-40 w-auto object-contain"


            />
            
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white font-open-sans text-sm md:text-base hover:text-gray-300 transition-colors font-normal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* MENU MOBILE */}
          <button
            className="md:hidden text-teal-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* DROPDOWN MOBILE (fica abaixo da faixa) */}
        {menuOpen && (
          <nav className="md:hidden bg-zinc-950 border-t border-white/5">
            <div className="px-4 py-4 flex flex-col items-center space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white font-open-sans text-base hover:text-gray-300 transition-colors font-normal"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* CONTEÚDO PRINCIPAL (desce para não ficar atrás da faixa fixa) */}
      {/* 
      <div className="max-w-4xl mx-auto text-center px-4 pt-28 pb-10 md:pt-32 md:pb-14">
        <p className="font-open-sans text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Cortes modernos, barba impecável e cuidado que você merece.
        </p>
      </div> */}
    </header>
  );
};
