import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-spacing scroll-mt-24">
      <div className="container grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading id="sobre-title" eyebrow="Sobre mim" title="Experiência que conecta" highlight="pessoas e tecnologia" align="left" />
          <div className="mt-7 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Sou professor, profissional de suporte de TI e desenvolvedor front-end. Minha trajetória na educação fortaleceu habilidades essenciais para produtos digitais: escuta ativa, comunicação clara, organização e atenção às necessidades de quem usa a tecnologia.
            </p>
            <p>
              Em meus projetos, aplico React, TypeScript, JavaScript e Tailwind CSS enquanto avanço nas formações em Sistemas de Informação e Tecnologia da Informação. Os estudos incluem desenvolvimento Full Stack, arquitetura de software e integração de APIs.
            </p>
            <p>
              Meu objetivo é criar interfaces acessíveis e funcionais, com código bem estruturado e decisões que façam sentido para usuários, clientes e equipes.
            </p>
          </div>
        </div>

        <ul className="space-y-4" aria-label="Áreas de atuação">
          {skills.map(({ icon: Icon, title, description }) => (
            <li key={title} className="card-surface group flex items-start gap-4 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20" aria-hidden="true">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
