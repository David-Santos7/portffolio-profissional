import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface text-primary text-sm font-medium mb-8 border border-border">
              Desenvolvedor Full Stack & Designer
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-100 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-6">
            Criando experiências
            <span className="block text-gradient">digitais únicas</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Transformo ideias em soluções digitais elegantes, combinando design criativo 
            com código de alta qualidade para entregar resultados excepcionais.
          </p>

          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projetos" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Ver Projetos
            </a>
            <a 
              href="#sobre" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-surface transition-all duration-300"
            >
              Conhecer Mais
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up animation-delay-500">
        <a href="#sobre" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
