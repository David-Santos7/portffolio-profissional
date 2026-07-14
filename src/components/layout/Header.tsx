import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import profileImage96 from "@/assets/perfil-96.webp";
import profileImage192 from "@/assets/perfil-192.webp";
import { navigation } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navigation.map(({ id }) => id);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between sm:h-24">
        <a
          href="/#inicio"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="David Santos Souza — voltar ao início"
        >
          <span className="rounded-full bg-gradient-gold p-0.5" aria-hidden="true">
            <img
              src={profileImage96}
              srcSet={`${profileImage96} 96w, ${profileImage192} 192w`}
              sizes="48px"
              alt=""
              width="48"
              height="48"
              decoding="async"
              className="size-11 rounded-full bg-background object-cover sm:size-12"
            />
          </span>
          <span className="hidden font-display text-lg font-semibold sm:block">David Santos Souza</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navegação móvel"
        hidden={!menuOpen}
        className="border-t border-border bg-background px-6 py-4 md:hidden"
      >
        <div className="container flex flex-col gap-1 px-0">
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={closeMenu}
              aria-current={activeSection === id ? "location" : undefined}
              className="rounded-lg px-3 py-3 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground aria-[current=location]:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
