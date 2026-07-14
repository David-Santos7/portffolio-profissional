import { describe, expect, it } from "vitest";
import { featuredProjects, projects, studyProjects } from "@/data/projects";
import { navigation, siteConfig } from "@/data/site";

describe("dados do portfólio", () => {
  it("mantém identificadores de navegação únicos", () => {
    const ids = navigation.map(({ id }) => id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("mantém a curadoria tipada e os projetos em destaque entre quatro e seis itens", () => {
    expect(featuredProjects).toHaveLength(6);
    expect(featuredProjects[0]?.id).toBe("ape-vila-sonia");
    expect(featuredProjects.length).toBeGreaterThanOrEqual(4);
    expect(featuredProjects.length).toBeLessThanOrEqual(6);
    expect(studyProjects).toHaveLength(12);
    expect(studyProjects.slice(-4).map(({ id }) => id)).toEqual([
      "jogo-mata-mosquito",
      "clone-spotify",
      "finans-pessoal",
      "detona-pennywise",
    ]);
    expect(projects.every(({ collection }) => collection === "featured" || collection === "study")).toBe(true);
  });

  it("mantém projetos únicos, descrições concretas e URLs seguras", () => {
    expect(new Set(projects.map(({ id }) => id)).size).toBe(projects.length);
    expect(new Set(projects.map(({ title }) => title)).size).toBe(projects.length);

    projects.forEach((project) => {
      expect(project.description.length).toBeGreaterThan(45);
      expect(project.tags.length).toBeGreaterThan(1);
      if (project.liveUrl) {
        expect(project.liveUrl).toMatch(/^https:\/\//);
      }
      expect(project.githubUrl).toMatch(/^https:\/\/github\.com\//);
    });
  });

  it("usa canais profissionais em HTTPS", () => {
    expect(siteConfig.github).toMatch(/^https:\/\//);
    expect(siteConfig.linkedin).toMatch(/^https:\/\//);
    expect(siteConfig.whatsapp).toMatch(/^https:\/\//);
  });
});
