import { ArrowUpRight, Code2, FlaskConical, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProjects, studyProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import type { Project } from "@/types/portfolio";

const detailLabels = {
  objective: "Objetivo",
  audience: "Público",
  responsibility: "Responsabilidade",
  challenge: "Desafio",
  solution: "Solução",
  result: "Resultado",
  learning: "Aprendizado",
} as const;

type ProjectDetailKey = keyof typeof detailLabels;

const detailKeys = Object.keys(detailLabels) as ProjectDetailKey[];

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  const linkClassName = compact ? "text-link inline-flex min-h-11 items-center gap-1.5" : "project-link";

  return (
    <div className={compact ? "mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm" : "mt-7 flex flex-wrap gap-3"}>
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          Ver projeto <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only"> {project.title} (abre em nova aba)</span>
        </a>
      ) : null}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={compact ? linkClassName : "project-link project-link-secondary"}
      >
        <Github className="size-4" aria-hidden="true" /> Código
        <span className="sr-only"> de {project.title} (abre em nova aba)</span>
      </a>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const details = detailKeys.flatMap((key) => {
    const value = project[key];
    return typeof value === "string" ? [{ key, value }] : [];
  });

  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      {project.image ? (
        <div className="aspect-video overflow-hidden border-b border-border bg-surface">
          <img
            src={project.image}
            alt={`Prévia do projeto ${project.title}`}
            loading="lazy"
            decoding="async"
            width="1280"
            height="720"
            className="size-full object-cover transition duration-500 motion-safe:group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="project-placeholder" aria-hidden="true">
          <Code2 className="size-10" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{project.category}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>

        {details.length > 0 ? (
          <dl className="mt-6 space-y-4 border-t border-border pt-5">
            {details.map(({ key, value }) => (
              <div key={key}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/75">{detailLabels[key]}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologias de ${project.title}`}>
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-surface-elevated px-3 py-1 text-xs text-foreground/75">{tag}</li>
          ))}
        </ul>
        <div className="mt-auto">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section-spacing scroll-mt-24">
      <div className="container">
        <SectionHeading
          id="projetos-title"
          eyebrow="Portfólio"
          title="Projetos em"
          highlight="destaque"
          description="Uma seleção de trabalhos que conecta desenvolvimento front-end, educação e soluções digitais para necessidades concretas."
        />

        <ul className="mt-14 grid items-stretch gap-7 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <li key={project.id} className="h-full">
              <FeaturedProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-24 border-t border-border pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
              <FlaskConical className="size-6" />
            </span>
            <h3 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">Laboratório de estudos</h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Exercícios e projetos menores que registram a prática de lógica, JavaScript, HTML e CSS ao longo da formação.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {studyProjects.map((project) => (
              <li key={project.id}>
                <article className="card-surface flex h-full flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</p>
                  <h4 className="mt-2 font-display text-xl font-semibold">{project.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologias de ${project.title}`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-surface-elevated px-2.5 py-1 text-xs text-foreground/75">{tag}</li>
                    ))}
                  </ul>
                  <ProjectLinks project={project} compact />
                </article>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          Consulte outros repositórios e estudos no{" "}
          <a className="text-link" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            perfil de David no GitHub<span className="sr-only"> (abre em nova aba)</span>
          </a>.
        </p>
      </div>
    </section>
  );
}

export default ProjectsSection;
