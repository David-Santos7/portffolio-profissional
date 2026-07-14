import type { LucideIcon } from "lucide-react";

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  location: string;
  github: string;
  linkedin: string;
  whatsapp: string;
}

export type NavigationSectionId = "sobre" | "experiencia" | "projetos" | "robotica" | "contato";

export interface NavigationItem {
  id: NavigationSectionId;
  label: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export type ProjectCollection = "featured" | "study";

export type ProjectCategory =
  | "Site institucional"
  | "Landing page comercial"
  | "Loja virtual"
  | "Projeto acadêmico"
  | "Aplicação interativa"
  | "Estudo de front-end"
  | "Exercício de lógica";

export interface Project {
  id: string;
  collection: ProjectCollection;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: readonly string[];
  image?: string;
  objective?: string;
  audience?: string;
  responsibility?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  learning?: string;
  liveUrl?: string;
  githubUrl: string;
}
