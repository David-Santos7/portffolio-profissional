import { ArrowDown } from "lucide-react";
import backgroundImage from "@/assets/background-site.png";

const HeroSection = () => {
  return (
    <section
      className="
        relative overflow-hidden
        flex items-start justify-center
        min-h-[10vh] sm:min-h-screen
        pt-24 sm:pt-32
        pb-8 sm:pb-20
        bg-no-repeat
        bg-top sm:bg-center
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
      }}
    >
      {/* Ajuste de background para desktop */}
      <style>
        {`
          @media (min-width: 640px) {
            section {
              background-size: cover;
            }
          }
        `}
      </style>

      {/* Overlay escuro */}
      <div className="absolute inset-0 z-0 bg-black/80 backdrop-blur-sm" />
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-16 -left-40 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-8 -right-40 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface/90 text-primary text-xs sm:text-sm font-medium mb-4 border border-border">
            Desenvolvedor Front-end
          </span>

          <h1
            className="
              font-display font-semibold leading-tight
              text-4xl sm:text-6xl lg:text-7xl
              mb-4
            "
          >
            Conectando Ideias
            <span className="block text-gradient">
              Digitais ao Mundo Real
            </span>
          </h1>

          <p
            className="
              text-muted-foreground
              text-sm sm:text-xl
              max-w-2xl mx-auto
              mb-6
            "
          >
            Transformo ideias reais em soluções digitais elegantes,
            conectando design criativo e código eficiente para
            experiências digitais de alto impacto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-all hover:scale-105"
            >
              Ver Projetos
            </a>

            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-border text-foreground font-medium hover:bg-surface transition-all"
            >
              Conhecer Mais
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll — apenas desktop */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
