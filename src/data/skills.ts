import { Code2, Palette, Rocket } from "lucide-react";
import type { Skill } from "@/types/portfolio";

export const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento web",
    description:
      "Interfaces responsivas com React, TypeScript, JavaScript, Tailwind CSS e integração com APIs.",
  },
  {
    icon: Palette,
    title: "Experiência do usuário",
    description:
      "Soluções claras e acessíveis, apoiadas por princípios de UX/UI, prototipação e design de interfaces.",
  },
  {
    icon: Rocket,
    title: "Tecnologia e educação",
    description:
      "Comunicação, suporte educacional e pensamento computacional para aproximar ferramentas digitais das necessidades de professores e estudantes.",
  },
] satisfies readonly Skill[];
