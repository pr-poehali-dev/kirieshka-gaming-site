import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "@/constants/channel";

interface HeaderProps {
  active: string;
  setActive: (s: string) => void;
}

export default function Header({ active, setActive }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0c12]/95 backdrop-blur-md border-b border-[#1e2433]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#ff4500] rounded flex items-center justify-center" style={{ boxShadow: "0 0 10px #ff4500" }}>
            <span className="text-white font-bold text-sm" style={{ fontFamily: "Oswald, sans-serif" }}>К</span>
          </div>
          <span className="font-bold text-xl text-white group-hover:text-[#ff6b1a] transition-colors" style={{ fontFamily: "Oswald, sans-serif" }}>
            КИРИЕШКА
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link font-medium text-sm uppercase tracking-widest transition-colors ${
                active === item.id ? "text-[#ff4500] active" : "text-gray-400 hover:text-white"
              }`}
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("subscribe")}
          className="hidden md:flex items-center gap-2 neon-btn bg-[#ff4500] text-white font-semibold uppercase tracking-wider px-5 py-2 rounded text-sm"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          <Icon name="Youtube" size={16} />
          Подписаться
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111520] border-t border-[#1e2433]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-6 py-4 font-medium uppercase tracking-wider text-gray-300 hover:text-[#ff4500] hover:bg-[#1e2433]/30 transition-colors border-b border-[#1e2433]/50"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
