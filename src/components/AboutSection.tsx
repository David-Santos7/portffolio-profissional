import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "React, TypeScript, Node.js, Python e outras tecnologias modernas.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX Design, Figma, design systems e prototipagem.",
  },
  {
    icon: Rocket,
    title: "Estratégia",
    description: "Consultoria técnica, arquitetura de software e otimização.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Sobre Mim
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-6 leading-tight">
              Olá, sou <span className="text-gradient">Marco Silva</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 8 anos de experiência no desenvolvimento de soluções digitais, 
                combino expertise técnica com sensibilidade criativa para entregar projetos 
                que realmente fazem a diferença.
              </p>
              <p>
                Minha abordagem é centrada no usuário, focando em criar experiências 
                intuitivas e funcionais que conectam marcas aos seus públicos de forma 
                significativa.
              </p>
              <p>
                Acredito que a tecnologia deve simplificar a vida das pessoas, e é isso 
                que busco em cada projeto que desenvolvo.
              </p>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover-lift hover-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
