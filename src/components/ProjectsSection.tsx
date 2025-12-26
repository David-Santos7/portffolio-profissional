import { ArrowUpRight, Github } from "lucide-react";
import aguiaAzulGif from "@/assets/aguiaazul.gif";
import portfolioManual from "@/assets/portfolio-manual.gif"
import MundoInvertido from "@/assets/mundoinvertido.gif"
import AdvinheNumero from "@/assets/Adivinhhe-número.png"
import lojaMarilac from "@/assets/loja-Marialc.png"
import jogoMemoria from "@/assets/jogo-memoria.png"
import imc from "@/assets/imc.png"
import cloneYouTube from "@/assets/cloneyoutube.png"
import itCoisa from "@/assets/itcoisa.png"
import siteCidade from "@/assets/sitecidade.png"
import praticaGrid from "@/assets/praticagrid.png"
import gridYouTube from "@/assets/youtubegrid.png"
import chaleHotel from "@/assets/chalehotel.png"
import ProjetoIntegrador from "@/assets/projetointegrador.png"







// se o alias @ não funcionar, use:
// import aguiaAzulGif from "../assets/aguiaazul.gif";

const projects = [
  {
    title: "Site: Escola Águia Azul",
    category: "Web Site",
    description:
      "Plataforma institucional desenvolvida para a Escola Águia Azul, com foco em apresentação, navegação clara e responsividade.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    image: aguiaAzulGif,
    liveUrl:
      "https://david-santos7.github.io/colegio-presbiteriano-mackenzie-aguia-azul/",
    githubUrl:
      "https://github.com/David-Santos7/colegio-presbiteriano-mackenzie-aguia-azul.git",
    },

    {
      title: "Projeto de estudo: Mundo invertido",
      category: "Web Site",
      description:
        "Website criado para praticar CSS e sua aplicabilidade, utilizando layout e criatividade",
      tags: ["HTML", "CSS", "JavaScript"],
      image: MundoInvertido,
      liveUrl:
        "https://david-santos7.github.io/projeto-portfolio-9/",
      githubUrl:
        "https://github.com/David-Santos7/projeto-portfolio-9",
    },

  {
    title: "Portfólio Manual",
    category: "Web Site",
    description:
      "Portfólio Manual desenvolvido a partir de estudos realizados em JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: portfolioManual,
    liveUrl:
      "https://david-santos7.github.io/portfolio-profissional/",
    githubUrl:
      "https://github.com/David-Santos7/portfolio-profissional",
  },
  {
    title: "Projeto Lógica de programaçao - Adivinhe o número",
    category: "Web Site",
    description:
      "Projeto desenvolvido com o intutio de aplicar conhecimentos práticos em Lógica de programação.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: AdvinheNumero,
    liveUrl:
      "https://david-santos7.github.io/jogo-adivinhe-os-numeros/",
    githubUrl:
      "https://github.com/David-Santos7/jogo-adivinhe-os-numeros/",
  },
  
  {
    title: "Projeto - loja virtubal em Bootstrap",
    category: "Web Site",
    description:
      "Web site desenvolvido para aprofundamento de estudos voltado ao CSS e Bootstrap",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: lojaMarilac,
    liveUrl:
      "https://david-santos7.github.io/projeto-portfolio-1/",
    githubUrl:
      "https://github.com/David-Santos7/projeto-portfolio-1",
  },
  
  {
    title: "Projeto Lógica em JS - Jogo da memória",
    category: "Web Site",
    description:
      "Projeto desenvolvido para trabalhar lógica de programação, além de aplicar conhecimentos nas demais áreas.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: jogoMemoria,
    liveUrl:
      "https://david-santos7.github.io/projeto-portfolio-4/",
    githubUrl:
      "https://github.com/David-Santos7/projeto-portfolio-4",
  },
  
  {
    title: "Projeto Lógica em JS - Calculadora de IMC",
    category: "Web Site",
    description:
      "Método em JavaScript para desenvolver lógica de programação e utilizar DOM.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: imc,
    liveUrl:
      "https://david-santos7.github.io/calculadora-imc/",
    githubUrl:
      "https://github.com/David-Santos7/calculadora-imc",
  },
  
  {
    title: "Projeto CSS - Clone do YouTube",
    category: "Web Site",
    description:
      "Projeto desenvolvido para trabalhar lógica de programação, além de aplicar conhecimentos nas demais áreas.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: cloneYouTube,
    liveUrl:
      "https://david-santos7.github.io/projeto-portfolio-6/",
    githubUrl:
      "https://github.com/David-Santos7/projeto-portfolio-6",
  },
  {
    title: "Site de notícias em HTML",
    category: "Web Site",
    description:
      "Projeto em HTML para praticar de maneira prática na criação de site de notícias",
    tags: ["HTML", "CSS", "JavaScript"],
    image: siteCidade,
    liveUrl:
      "https://david-santos7.github.io/projeto-portfolio-8/",
    githubUrl:
      "https://github.com/David-Santos7/projeto-portfolio-8",
  },
  {
    title: "Projeto Lógica de programaçao - It a Coisa",
    category: "Web Site",
    description:
      "Teve-se a ideia de aplicar conhecimentos práticos em Lógica de programação e aplicar repetições com Java Script.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: itCoisa,
    liveUrl:
      "https://david-santos7.github.io/projeto-portfolio-5/",
    githubUrl:
      "https://github.com/David-Santos7/projeto-portfolio-5",
  },
  {
    title: "Projeto CSS - Criando uma Grid",
    category: "Web Site",
    description:
      "Aplicando conhecimentos básicos de Grid Layout",
    tags: ["HTML", "CSS", "JavaScript"],
    image: praticaGrid,
    liveUrl:
      "https://david-santos7.github.io/projeto-grid-dio/",
    githubUrl:
      "https://github.com/David-Santos7/projeto-grid-dio/",
  },
  {
    title: "Grid - utilizando Youtube",
    category: "Web Site",
    description:
      "Utilizou-se o YouTube para aplicar o aprendizado de Grid em CSS",
    tags: ["HTML", "CSS"],
    image: gridYouTube,
    liveUrl:
      "https://david-santos7.github.io/projeto-portfilio-3/",
    githubUrl:
      "https://github.com/David-Santos7/projeto-portfilio-3",
  },
  
  {
    title: "Projeto HTML - Chalé hotel",
    category: "Web Site",
    description:
      "Estudos dirigidos ao uso de fundamentos HTML para criação de site.",
    tags: ["HTML", "CSS"],
    image: chaleHotel,
    liveUrl:
      "https://david-santos7.github.io/Projeto-udemy-chale-hotel/",
    githubUrl:
      "https://github.com/David-Santos7/Projeto-udemy-chale-hotel/",
  },
  
  {
    title: "Projeto Integrador - Criação de um Layout para projeto universitário",
    category: "Projeto Universitário",
    description:
      "Utilizou-se o YouTube para aplicar o aprendizado de Grid em CSS",
    tags: ["HTML", "CSS"],
    image: ProjetoIntegrador,
    liveUrl:
      "https://david-santos7.github.io/projeto-portfolio-10/",
    githubUrl:
      "https://github.com/David-Santos7/projeto-portfolio-10",
  },
  
  
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 sm:py-32">
      <div className="container">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card hover-lift"
            >
              {/* IMAGEM / GIF */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-90 transition-all duration-500"
                />

                {/* Gradiente escuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                {/* Hover */}
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    title="Ver projeto"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                    title="Ver código"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* INFO */}
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
