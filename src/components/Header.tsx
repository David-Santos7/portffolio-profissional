import { useEffect, useState } from "react";
import logoDSS from "@/assets/perfil.png";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

const HEADER_HEIGHT_DESKTOP = 96;
const HEADER_HEIGHT_MOBILE = 80;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* 🔹 Scroll Spy */
  useEffect(() => {
    const handleScroll = () => {
      const offset =
        window.innerWidth < 768
          ? HEADER_HEIGHT_MOBILE
          : HEADER_HEIGHT_DESKTOP;

      const scrollPosition = window.scrollY + offset + 10;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔹 Scroll com offset (corrige o bug do Contato) */
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset =
      window.innerWidth < 768
        ? HEADER_HEIGHT_MOBILE
        : HEADER_HEIGHT_DESKTOP;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between py-4">

        {/* LOGO */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img
                src={logoDSS}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <span className="font-display text-lg hidden sm:block">
            David Santos Souza
          </span>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative text-sm transition-colors
                ${
                  activeSection === id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {label}

              {activeSection === id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg border border-border"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col gap-4 p-6">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left text-base transition-colors
                  ${
                    activeSection === id
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }
                `}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
