import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Foco em HTML, CSS, Javascript. Aprendendo React, Angular, NodeJs VueJs e TypeScript, além de outras tecnologias modernas.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Estudante de: UI/UX Design, SAAS, Tailwind, Figma, utilização de IA para desenvolvimento de imagens e paletas de cores.",
  },
  {
    icon: Rocket,
    title: "Estratégia",
    description:
      "Escuta ativa para desenvolvimento do projeto. Estudar ferramentas de IA e frameworks para melhoria.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-32"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Saiba mais sobre mim:
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-6 leading-tight">
              Muito Prazer! Sou{" "}
              <span className="text-gradient">David Santos Souza</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Estou realizando uma transição de carreira, atualmente, sou
                professor de Língua Portuguesa e Língua Inglesa. Dessa maneira,
                escolhi iniciar a carreira na área de tecnologia como
                desenvolvedor front-end, trabalhando como freelancer.
              </p>

              <p>
                Tenho estudado ferramentas como React, Bootstrap, Angular,
                Kotlin, Android Studio e Dart, mas meu foco principal está em
                HTML, CSS e JavaScript.
              </p>

              <p>
                Com o crescimento da IA no desenvolvimento de páginas, o início
                de carreira se tornou mais desafiador. Ainda assim, venho
                estudando como essas ferramentas funcionam e como utilizá-las
                estrategicamente.
              </p>

              <p>
                Busco criar projetos focados na Experiência do Usuário, unindo
                UX/UI ao desenvolvimento para entregar soluções intuitivas,
                funcionais e que conectem marcas ao seu público.
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
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {skill.description}
                    </p>
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
