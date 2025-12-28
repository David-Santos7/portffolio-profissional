import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/ui/navlink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-20">

        {/* LOGO */}
        <NavLink
          to="/"
          className="font-display text-lg font-semibold"
        >
          David Santos Souza
        </NavLink>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/#sobre" activeClassName="text-primary">
            Saiba mais
          </NavLink>

          <NavLink to="/#experiencia" activeClassName="text-primary">
            Experiência
          </NavLink>

          <NavLink to="/#projetos" activeClassName="text-primary">
            Projetos
          </NavLink>

          <NavLink to="/#contato" activeClassName="text-primary">
            Contato
          </NavLink>

          <NavLink
            to="/#contato"
            className="ml-4 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition"
          >
            Fale comigo
          </NavLink>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5 text-base">

            <NavLink to="/#sobre" onClick={() => setOpen(false)}>
              Saiba mais
            </NavLink>

            <NavLink to="/#experiencia" onClick={() => setOpen(false)}>
              Experiência
            </NavLink>

            <NavLink to="/#projetos" onClick={() => setOpen(false)}>
              Projetos
            </NavLink>

            <NavLink to="/#contato" onClick={() => setOpen(false)}>
              Contato
            </NavLink>

            <NavLink
              to="/#contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground"
            >
              Fale comigo
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
