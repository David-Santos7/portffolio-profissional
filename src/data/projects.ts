import apeVilaSonia from "@/assets/apevila.webp";
import ciebp from "@/assets/ciebp.webp";
import sistemaSolar from "@/assets/sistema-solar.webp";
import cardapioWeb from "@/assets/Jardim-das-delicias.webp";
import marilacStore from "@/assets/marilachandmade-store.webp";
import aguiaAzulImage from "@/assets/aguiaazul.webp";

import type { Project } from "@/types/portfolio";

export const projects = [
  {
    id: "ape-vila-sonia",
    collection: "featured",
    title: "APE Vila Sônia",
    category: "Landing page comercial",
    description:
      "Landing page para apresentar apartamentos na região da Vila Sônia, com informações organizadas para apoiar o contato de pessoas interessadas.",
    objective:
      "Apresentar um empreendimento imobiliário e reunir seus principais conteúdos em uma experiência de navegação direta.",
    audience:
      "Pessoas interessadas em apartamentos na região da Vila Sônia, em São Paulo.",
    solution:
      "Aplicação em React e TypeScript com seções de galeria, plantas, diferenciais, vídeo, depoimentos e formulário de contato.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: apeVilaSonia,
    liveUrl: "https://apevilasonia.com.br/",
    githubUrl: "https://github.com/David-Santos7/apevilasonia",
  },
  {
    id: "ciebp-itapecerica",
    collection: "featured",
    title: "CIEBP Itapecerica da Serra",
    category: "Site institucional",
    description:
      "Protótipo institucional para organizar e divulgar informações, projetos pedagógicos e recursos tecnológicos do CIEBP.",
    objective:
      "Criar uma base digital para apresentar o espaço, apoiar projetos educacionais e ampliar o acesso a materiais e informações.",
    audience:
      "Professores, estudantes, escolas parceiras, equipes técnicas e comunidade escolar.",
    responsibility:
      "Desenvolvimento do protótipo, organização das páginas e documentação técnica da solução.",
    challenge:
      "Organizar conteúdos institucionais, projetos, tutoriais e dados em uma estrutura que possa crescer gradualmente.",
    solution:
      "Site multipágina com HTML, CSS e JavaScript, documentação técnica e estrutura preparada para integração com Supabase.",
    tags: ["HTML", "CSS", "JavaScript", "Supabase"],
    image: ciebp,
    liveUrl: "https://ciebp-itapecerica-da-serra.vercel.app",
    githubUrl: "https://github.com/David-Santos7/ciebp-itapecerica-da-serra",
  },
  {
    id: "sistema-solar",
    collection: "featured",
    title: "Simulador de Sistema Solar",
    category: "Aplicação interativa",
    description:
      "Simulação astronômica interativa com órbitas animadas, partículas e controle da velocidade do tempo.",
    objective:
      "Explorar conceitos visuais do sistema solar por meio de uma experiência interativa no navegador.",
    challenge:
      "Sincronizar órbitas aninhadas e permitir que diferentes animações respondam a um único controle de velocidade.",
    solution:
      "Hierarquia de elementos no DOM, animações CSS e JavaScript para partículas e atualização de variáveis de tempo.",
    learning:
      "Aplicação prática de transform-origin, composição de movimentos e controle de estado em uma simulação visual.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: sistemaSolar,
    liveUrl: "https://sistemasolar-two.vercel.app",
    githubUrl: "https://github.com/David-Santos7/sistema-solar",
  },
  {
    id: "cardapio-web",
    collection: "featured",
    title: "Cardápio Web",
    category: "Projeto acadêmico",
    description:
      "Protótipo acadêmico de cardápio digital com catálogo de produtos e fluxo de checkout para navegador.",
    objective:
      "Estruturar uma experiência de consulta e seleção de produtos para um projeto integrador da UNIVESP.",
    solution:
      "Interface em HTML, CSS e JavaScript com páginas de catálogo, checkout e acesso ao contato por WhatsApp.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: cardapioWeb,
    liveUrl: "https://projeto-integrador3-cardapioweb.vercel.app",
    githubUrl: "https://github.com/David-Santos7/projeto-integrador3-cardapioweb",
  },
  {
    id: "marilachandmade-store",
    collection: "featured",
    title: "Marilachandmade Store",
    category: "Loja virtual",
    description:
      "Vitrine digital para uma loja de bolsas femininas artesanais, organizada para apresentar produtos, coleções e opções de encomenda.",
    objective:
      "Construir uma presença comercial clara para divulgar peças disponíveis, produtos sob encomenda e a identidade da marca.",
    audience: "Pessoas interessadas em bolsas femininas artesanais e peças feitas sob encomenda.",
    responsibility:
      "Construção da estrutura HTML, estilização em CSS e composição da interface com componentes do Bootstrap.",
    challenge:
      "Organizar navegação, promoções, coleções e localização da loja em uma única página comercial.",
    solution:
      "Página construída com HTML5, CSS3 e Bootstrap 5.3, incluindo menu fixo, carrossel, coleções em abas e modal com mapa.",
    learning:
      "Aplicação e personalização de componentes do Bootstrap durante a Trilha de CSS da DIO.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: marilacStore,
    liveUrl: "https://david-santos7.github.io/projeto-portfolio-1/",
    githubUrl: "https://github.com/David-Santos7/projeto-portfolio-1",
  },
  {
    id: "escola-aguia-azul",
    collection: "featured",
    title: "Escola Águia Azul",
    category: "Site institucional",
    description:
      "Site institucional criado para apresentar a identidade educacional, os serviços e as atividades da Escola Águia Azul.",
    objective:
      "Organizar as informações da escola em uma presença digital clara, acessível por diferentes tamanhos de tela.",
    solution:
      "Páginas institucionais com navegação responsiva e conteúdo organizado por áreas de interesse da comunidade escolar.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    image: aguiaAzulImage,
    liveUrl: "https://colegio-presbiteriano-mackenzie-agu.vercel.app",
    githubUrl: "https://github.com/David-Santos7/colegio-presbiteriano-mackenzie-aguia-azul",
  },
  {
    id: "calculadora-imc",
    collection: "study",
    title: "Calculadora de IMC",
    category: "Exercício de lógica",
    description:
      "Calculadora desenvolvida em um curso de JavaScript, com entrada de peso e altura, cálculo e atualização do resultado na interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://david-santos7.github.io/calculadora-imc/",
    githubUrl: "https://github.com/David-Santos7/calculadora-imc",
  },
  {
    id: "portfolio-manual",
    collection: "study",
    title: "Portfólio Manual",
    category: "Estudo de front-end",
    description:
      "Versão anterior do portfólio, construída com HTML, CSS e JavaScript durante a evolução dos estudos em front-end.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://david-santos7.github.io/portfolio-profissional/",
    githubUrl: "https://github.com/David-Santos7/portfolio-profissional",
  },
  {
    id: "mundo-invertido",
    collection: "study",
    title: "Mundo Invertido",
    category: "Estudo de front-end",
    description:
      "Landing page temática de Stranger Things desenvolvida durante a Semana Front-end da DIO.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://david-santos7.github.io/projeto-portfolio-9/",
    githubUrl: "https://github.com/David-Santos7/projeto-portfolio-9",
  },
  {
    id: "adivinhe-o-numero",
    collection: "study",
    title: "Adivinhe o Número",
    category: "Exercício de lógica",
    description:
      "Jogo desenvolvido no curso de lógica de programação da Alura para praticar condições e interação com a página.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://david-santos7.github.io/jogo-adivinhe-os-numeros/",
    githubUrl: "https://github.com/David-Santos7/jogo-adivinhe-os-numeros",
  },
  {
    id: "jogo-da-memoria",
    collection: "study",
    title: "Jogo da Memória",
    category: "Exercício de lógica",
    description:
      "Jogo da memória com tema de lanchonete, desenvolvido com HTML, CSS e JavaScript puro.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://david-santos7.github.io/projeto-portfolio-4/",
    githubUrl: "https://github.com/David-Santos7/projeto-portfolio-4",
  },
  {
    id: "clone-youtube",
    collection: "study",
    title: "Clone da Página Inicial do YouTube",
    category: "Estudo de front-end",
    description:
      "Reprodução da interface inicial do YouTube criada durante a Trilha de CSS da DIO.",
    tags: ["HTML", "CSS"],
    liveUrl: "https://david-santos7.github.io/projeto-portfolio-6/",
    githubUrl: "https://github.com/David-Santos7/projeto-portfolio-6",
  },
  {
    id: "noticias-itapecity",
    collection: "study",
    title: "Notícias Itapecity",
    category: "Estudo de front-end",
    description:
      "Portal de notícias estático desenvolvido para praticar estruturação de conteúdo com HTML5 e CSS3.",
    tags: ["HTML", "CSS"],
    liveUrl: "https://david-santos7.github.io/projeto-portfolio-8/",
    githubUrl: "https://github.com/David-Santos7/projeto-portfolio-8",
  },
  {
    id: "pratica-css-grid",
    collection: "study",
    title: "Prática de CSS Grid",
    category: "Estudo de front-end",
    description:
      "Landing page criada na Trilha de CSS da DIO para aplicar estrutura semântica e organização de layout com CSS Grid.",
    tags: ["HTML", "CSS", "CSS Grid"],
    liveUrl: "https://david-santos7.github.io/projeto-grid-dio/",
    githubUrl: "https://github.com/David-Santos7/projeto-grid-dio",
  },
  {
    id: "jogo-mata-mosquito",
    collection: "study",
    title: "Jogo Mata Mosquito",
    category: "Exercício de lógica",
    description:
      "Jogo interativo com alvos aleatórios, níveis de dificuldade, contagem de vidas, temporizador e efeitos de áudio controlados por JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://jogo-mata-mosquito-alpha.vercel.app/",
    githubUrl: "https://github.com/David-Santos7/jogo-mata-mosquito",
  },
  {
    id: "clone-spotify",
    collection: "study",
    title: "Clone do Spotify",
    category: "Estudo de front-end",
    description:
      "Reprodução educacional da landing page do Spotify, com menu fixo, carrossel, chamadas para ação e layout responsivo em Bootstrap.",
    tags: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://david-santos7.github.io/projeto-clone-spotify/",
    githubUrl: "https://github.com/David-Santos7/projeto-clone-spotify",
  },
  {
    id: "finans-pessoal",
    collection: "study",
    title: "Finans — Finanças Pessoais",
    category: "Estudo de front-end",
    description:
      "Landing page de finanças pessoais desenvolvida com Bootstrap para praticar a construção de uma interface comercial responsiva.",
    tags: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://david-santos7.github.io/finans-pessoal/",
    githubUrl: "https://github.com/David-Santos7/finans-pessoal",
  },
  {
    id: "detona-pennywise",
    collection: "study",
    title: "Detona Pennywise",
    category: "Exercício de lógica",
    description:
      "Jogo de reflexos com aparições aleatórias, pontuação em tempo real, contagem regressiva e eventos de clique implementados em JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://david-santos7.github.io/projeto-portfolio-5/",
    githubUrl: "https://github.com/David-Santos7/projeto-portfolio-5",
  },
] satisfies readonly Project[];

export const featuredProjects = projects.filter((project) => project.collection === "featured");
export const studyProjects = projects.filter((project) => project.collection === "study");
