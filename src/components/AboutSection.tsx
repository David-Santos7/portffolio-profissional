import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Foco em HTML, CSS, Javascript. Aprendendo React, Angular, NodeJs VueJs e TypeScript, além de outras tecnologias modernas.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Estudante de: UI/UX Design, SAAS, Tailwind, Figma, utilização de IA para desenvolvimento de imagens e paletas de cores.",
  },
  {
    icon: Rocket,
    title: "Estratégia",
    description: "Escuta ativa para desenvolvimento do projeto. Estudar ferramentas de IA e frameworks para melhoria.",
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
              Saiba mais sobre mim:
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-6 leading-tight">
              Muito Prazer! Sou <span className="text-gradient">David Santos Souza</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Estou realizando uma transição de carreira, atualmente, sou professor de Língua Portuguesa e Língua Inglesa.
                Dessa maneira, escolhi iniciar a carreira na área de tecnologia como desenvolvedor front-end, trabalhando como freelancer.
                Tenho estudado uma série de ferramentas como React, Bootstrap, Angular, Kotlin, Android Studio, e Dart, no entanto, o foco 
                das minhas habilidades são: HTML, CSS e JavaScript.
              </p>
              <p>Por conta da IA e seu o crescimento, principalmente em 
                desenvolvimento de páginas, isso tem dificultado um pouco para iniciantes se estabilizarem na carreira, como eu.
                Mesmo assim, isso não tem sido um problema, pois, tenho me dedicado a saber como a IA desenvolve sites, e como
                funcionam suas ferramentas e frameworks. 
              </p>
              <p>
                Tento criar projetos voltados a Experiência do usuário, assim, estudando um UX/UI em conjunto com o restante do
                projeto, para que o cliente tenha uma experiência realmente satisfatória. A partir da coleta de dados e informações,
                crio layouts intuitivos e funcionais, para que eles conectam marcas aos seus públicos de forma significativa.
              </p>
              <p>
                Tenho a crença que a tecnologia veio para facilitar a vida das pessoas, por isso, busco desenvolver projetos eficazes
                que façam sentido para os clientes e usuários.
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
