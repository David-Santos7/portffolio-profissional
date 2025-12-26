import logoDSS from "@/assets/perfil.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          
          {/* Avatar com fundo amarelo */}
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-amber-500 p-1.5">
      <div className="w-full h-full rounded-full overflow-hidden bg-background">
        <img
        src={logoDSS}
        alt="Foto de perfil"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
      </div>
    </div>


          <span className="font-display text-xl tracking-tight group-hover:text-primary transition-colors">
            David Santos Souza
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground link-underline">
            Saiba mais
          </a>
          <a href="#experiencia" className="text-sm text-muted-foreground hover:text-foreground link-underline">
            Experiência
          </a>
          <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground link-underline">
            Projetos
          </a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground link-underline">
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium hover:shadow-gold transition-all duration-300 hover:scale-105"
        >
          Fale Comigo
        </a>
      </div>
    </header>
  );
};

export default Header;
