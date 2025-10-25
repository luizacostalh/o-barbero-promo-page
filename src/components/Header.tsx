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
    <header className="bg-black py-12 px-4 relative">
      {/* NAV SUPERIOR DIREITO */}
      <div className="absolute top-4 right-4 flex items-center space-x-4 md:space-x-6">
        {/* MENU DESKTOP */}
        <nav className="hidden md:flex space-x-6">
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
          className="md:hidden text-yellow-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-4xl mx-auto text-center pt-10">
        <div className="mb-6">
          <img
            src={barberoLogo}
            alt="O Barbero Logo"
            className="h-40 md:h-52 w-auto mx-auto mb-4 filter drop-shadow-lg"
          />
        </div>
        <p className="font-open-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Cortes modernos, barba impecável e cuidado que você merece.
        </p>
      </div>

      {/* DROPDOWN MOBILE */}
      {menuOpen && (
        <nav className="md:hidden mt-4 bg-zinc-900 rounded-lg shadow-lg p-4 flex flex-col items-center space-y-3">
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
        </nav>
      )}
    </header>
  );
};
