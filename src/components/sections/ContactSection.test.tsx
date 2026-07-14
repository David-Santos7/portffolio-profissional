import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactSection from "@/components/sections/ContactSection";

describe("ContactSection", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("envia dados válidos e comunica sucesso", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    render(<ContactSection />);

    await user.type(screen.getByLabelText("Nome"), "Maria Silva");
    await user.type(screen.getByLabelText("E-mail"), "maria@example.com");
    await user.type(screen.getByLabelText("Mensagem"), "Gostaria de conversar sobre um projeto.");
    await user.click(screen.getByRole("button", { name: "Enviar mensagem" }));

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(await screen.findByText(/mensagem enviada com sucesso/i)).toBeInTheDocument();
  });

  it("comunica falhas da API sem apagar os dados", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ errors: [{ message: "Serviço indisponível" }] }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    })));
    render(<ContactSection />);

    await user.type(screen.getByLabelText("Nome"), "Maria Silva");
    await user.type(screen.getByLabelText("E-mail"), "maria@example.com");
    await user.type(screen.getByLabelText("Mensagem"), "Mensagem válida para o formulário.");
    await user.click(screen.getByRole("button", { name: "Enviar mensagem" }));

    const feedback = await screen.findByRole("alert");
    expect(feedback).toHaveTextContent(/não foi possível enviar sua mensagem/i);
    expect(feedback).toHaveFocus();
    expect(screen.getByLabelText("Nome")).toHaveValue("Maria Silva");
  });

  it("mantém honeypot e limites coerentes no formulário", () => {
    render(<ContactSection />);

    expect(screen.getByLabelText("Não preencha este campo")).toHaveAttribute("name", "_gotcha");
    expect(screen.getByLabelText("Nome")).toHaveAttribute("maxlength", "80");
    expect(screen.getByLabelText("E-mail")).toHaveAttribute("maxlength", "254");
    expect(screen.getByLabelText("Mensagem")).toHaveAttribute("maxlength", "2000");
    expect(screen.getByLabelText("Mensagem")).toHaveAccessibleDescription(/10 e 2.000 caracteres/i);
  });
});
