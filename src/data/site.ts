import type { NavigationItem, SiteConfig } from "@/types/portfolio";

export const siteConfig = {
  name: "David Santos Souza",
  role: "Desenvolvedor Front-end",
  email: "devopsdavid7@gmail.com",
  phoneDisplay: "+55 (11) 95128-5236",
  phoneHref: "+5511951285236",
  location: "Itapecerica da Serra, SP",
  github: "https://github.com/David-Santos7",
  linkedin: "https://www.linkedin.com/in/david-santos-souza-130151260/",
  whatsapp: "https://wa.me/5511951285236",
} as const satisfies SiteConfig;

export const navigation = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "robotica", label: "Robótica" },
  { id: "contato", label: "Contato" },
] as const satisfies readonly NavigationItem[];
