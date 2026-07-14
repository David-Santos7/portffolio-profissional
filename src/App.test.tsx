import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "@/App";
import { featuredProjects, studyProjects } from "@/data/projects";

describe("App", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");
  });

  it("renderiza a apresentação e as seções principais", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: /conectando ideias digitais ao mundo real/i })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /navegação principal/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /projetos em destaque/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /laboratório de estudos/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /futebol de robôs/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /vamos conversar sobre seu projeto/i })).toBeInTheDocument();
  });

  it("separa projetos em destaque dos estudos e mantém links identificáveis", () => {
    render(<App />);

    featuredProjects.forEach(({ title, liveUrl }) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
      if (liveUrl) {
        expect(screen.getByRole("link", { name: new RegExp(`ver projeto ${title}`, "i") })).toHaveAttribute("target", "_blank");
      }
      expect(screen.getByRole("link", { name: new RegExp(`código de ${title}`, "i") })).toHaveAttribute("target", "_blank");
    });

    studyProjects.forEach(({ title }) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });

  it("renderiza a Política de Privacidade na rota dedicada", () => {
    window.history.replaceState({}, "", "/privacidade");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Política de Privacidade" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Dados enviados" })).toBeInTheDocument();
  });

  it("renderiza uma página não encontrada para rotas desconhecidas", () => {
    window.history.replaceState({}, "", "/endereco-inexistente");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Página não encontrada" })).toBeInTheDocument();
    expect(document.title).toBe("Página não encontrada | David Santos Souza");
  });
});
