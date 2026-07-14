import { ArrowDown, Github, Linkedin } from "lucide-react";
import brandImage from "@/assets/logo-site-amarelo.webp";
import HeroParticleField from "@/components/ui/HeroParticleField";
import { siteConfig } from "@/data/site";

function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="hero-section relative isolate flex scroll-mt-24 items-start overflow-hidden pt-20 sm:pt-24"
    >
      <HeroParticleField />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/5 via-background/40 to-background" aria-hidden="true" />
      <div className="absolute left-[7%] top-24 -z-10 size-48 rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />

      <div className="container py-12 text-center sm:py-14 lg:py-16">
        <p className="mx-auto mb-6 w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          {siteConfig.role} 
        </p>
        <h1 id="hero-title" className="text-balance font-display text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">
          Conectando ideias digitais ao Mundo Real,
          <span className="mt-2 block text-gradient">com interfaces tecnológicas conectadas às pessoas.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Desenvolvo experiências digitais responsivas, combinando código, comunicação e experiência em educação, IA e suporte de TI.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#projetos" className="button-primary w-full sm:w-auto">Ver projetos</a>
          <a href="#contato" className="button-secondary w-full sm:w-auto">Fale comigo</a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3" aria-label="Perfis profissionais">
          <a className="social-link" href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de David Santos Souza (abre em nova aba)">
            <Github aria-hidden="true" />
          </a>
          <a className="social-link" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de David Santos Souza (abre em nova aba)">
            <Linkedin aria-hidden="true" />
          </a>
        </div>
        <img
          src={brandImage}
          alt=""
          aria-hidden="true"
          width="1664"
          height="960"
          decoding="async"
          className="hero-mark mx-auto mt-10 h-auto w-32 object-contain sm:mt-12 sm:w-40"
        />
      </div>

      <a href="#sobre" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary sm:flex">
        Explorar
        <ArrowDown className="size-4 motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}

export default HeroSection;
