import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Front-end Freelancer",
    company: "Freelancer",
    period: "2025 - Presente",
    description: "Aplicação prática de conhecimentos adquiridos em projetos reais, atuando como freelancer",
  },
  {
    type: "work",
    title: "Suporte",
    company: "SEDUC - Secretaria da Educação",
    period: "2024 - Presente",
    description: "Atividades efetivas na área de suporte como: manutenção e atualização básica de notebooks, desktops e impressoras. Verificação da rede local e da central Infranet. Apoio à estudantes e professores.",
  },
  {
    type: "work",
    title: "Professor de Língua Inglesa Fundamental",
    company: "Escola Águia Azul",
    period: "2022 - Presente",
    description: "Desenvolvimento de atividades de Língua Inglesa para crianças de 6 a 10 anos. Ensino e aplicabilidade do material Mackenzie Educação.",
  },
];

const education = [
  {
    type: "education",
    title: "Graduação - Sistemas de Informação",
    company: "Faculdade Impacta de Tecnologia",
    period: "2023 - 2027",
    description: "Formação em fundamentos de computação, algoritmos, frameworks e estrutura de dados.",
  },
  {
    type: "education",
    title: "Graduação - Bacharelado em Tecnologia da Informação",
    company: "Univesp",
    period: "2023 - 2026",
    description: "Base sólida em computação voltada para a resolução de problemas complexos e transformação digital.",
  },
  {
    type: "education",
    title: "Atualização - Inglês",
    company: "Cambly",
    period: "2023 - Presente",
    description: "Realização de aulas de conversação com professores nativos, para me manter atualizado e estar sempre praticando",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-surface/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Informações complementares:
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
