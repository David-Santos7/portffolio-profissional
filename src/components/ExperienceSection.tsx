import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Innovators",
    period: "2021 - Presente",
    description: "Liderança técnica de equipes de desenvolvimento, arquitetura de sistemas escaláveis e implementação de soluções cloud-native.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2018 - 2021",
    description: "Desenvolvimento de aplicações web e mobile para clientes de diversos segmentos, desde startups até grandes empresas.",
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Creative Studio",
    period: "2016 - 2018",
    description: "Criação de interfaces interativas e responsivas, foco em experiência do usuário e performance.",
  },
];

const education = [
  {
    type: "education",
    title: "MBA em Gestão de Projetos",
    company: "FGV",
    period: "2020 - 2022",
    description: "Especialização em gestão ágil de projetos de tecnologia e inovação.",
  },
  {
    type: "education",
    title: "Bacharelado em Ciência da Computação",
    company: "USP",
    period: "2012 - 2016",
    description: "Formação sólida em fundamentos de computação, algoritmos e estrutura de dados.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-surface/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Trajetória
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Experiência & <span className="text-gradient">Formação</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Experiência Profissional</h3>
            </div>

            <div className="relative pl-8 border-l border-border space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[2.55rem] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <div className="p-5 rounded-xl bg-card border border-border hover-lift">
                    <span className="text-primary text-xs font-medium">{exp.period}</span>
                    <h4 className="font-display text-lg font-semibold mt-1">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Formação Acadêmica</h3>
            </div>

            <div className="relative pl-8 border-l border-border space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[2.55rem] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <div className="p-5 rounded-xl bg-card border border-border hover-lift">
                    <span className="text-primary text-xs font-medium">{edu.period}</span>
                    <h4 className="font-display text-lg font-semibold mt-1">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{edu.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
