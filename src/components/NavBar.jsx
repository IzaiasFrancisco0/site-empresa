import { useState, useEffect } from "react";

const NAV_LINKS = ["Início", "Produtos", "Serviços", "Sobre", "Contato"];

const sectionIds = [
  "inicio",
  "produtos",
  "servicos",
  "sobre",
  "contato",
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-black/95 shadow-lg shadow-red-950/30 backdrop-blur-md"
          : "bg-black/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollTo("inicio")}
        >
          <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-display text-xl">
              EL
            </span>
          </div>

          <div>
            <div className="font-display text-xl leading-none tracking-wider text-white">
              ESTAÇÃO LANA
            </div>

            <div className="text-red-500 text-[10px] font-cond font-bold tracking-[0.3em] uppercase">
              Depósito · Areia e Brita
            </div>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-sm font-cond font-bold tracking-widest uppercase text-gray-300 hover:text-red-500 transition-colors duration-200 relative group"
            >
              {l}

              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}

          <button
            onClick={() => scrollTo("contato")}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 text-sm font-cond font-bold tracking-widest uppercase transition-all duration-200 rounded-sm"
          >
            Pedir Orçamento
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <div
            className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <div
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-900/40 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-left font-cond font-bold text-lg tracking-widest uppercase text-gray-300 hover:text-red-500 transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}