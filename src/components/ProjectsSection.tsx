import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "Plataforma completa de comércio eletrônico com dashboard administrativo, gestão de produtos e integração com meios de pagamento.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Finance Dashboard",
    category: "SaaS",
    description: "Dashboard financeiro interativo com visualização de dados em tempo real, relatórios personalizados e alertas automatizados.",
    tags: ["TypeScript", "Next.js", "D3.js", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Health & Fitness App",
    category: "Mobile App",
    description: "Aplicativo mobile para acompanhamento de treinos, nutrição e métricas de saúde com integração a wearables.",
    tags: ["React Native", "Firebase", "HealthKit"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Task Management",
    category: "Productivity",
    description: "Sistema de gestão de tarefas e projetos com colaboração em tempo real, timeline visual e automações.",
    tags: ["Vue.js", "GraphQL", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Portfólio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
            Projetos <span className="text-gradient">Selecionados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando versatilidade 
            técnica e atenção aos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover-lift ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-surface relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-primary/20 font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    title="Ver projeto"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                    title="Ver código"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
