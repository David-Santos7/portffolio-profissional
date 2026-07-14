import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ProjectRobotics from "@/components/sections/ProjectRobotics";

describe("ProjectRobotics", () => {
  it("apresenta os dois códigos e a prévia do tutorial", () => {
    render(<ProjectRobotics />);

    expect(screen.getByRole("heading", { name: /futebol de robôs/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /abrir código do carrinho/i })).toHaveAttribute(
      "href",
      "https://makecode.microbit.org/S84234-74676-28856-20934",
    );
    expect(screen.getByRole("link", { name: /abrir código do controle/i })).toHaveAttribute(
      "href",
      "https://makecode.microbit.org/S49995-27738-16406-88213",
    );
    expect(screen.getByAltText(/prévia do vídeo/i)).toBeInTheDocument();
  });

  it("carrega o vídeo somente após a ação do usuário", async () => {
    const user = userEvent.setup();
    render(<ProjectRobotics />);

    expect(screen.queryByTitle(/tutorial: programação/i)).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /reproduzir tutorial/i }));

    expect(screen.getByTitle(/tutorial: programação/i)).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/WSEcYFiG8aA?autoplay=1&rel=0",
    );
  });
});
