const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
            <span className="font-display text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="font-display text-xl tracking-tight group-hover:text-primary transition-colors">
            Marco Silva
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
            Sobre
          </a>
          <a href="#experiencia" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
            Experiência
          </a>
          <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
            Projetos
          </a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
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
