import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { usePageMetadata } from "@/hooks/usePageMetadata";

function NotFound() {
  usePageMetadata({
    title: "Página não encontrada | David Santos Souza",
    description: "A página solicitada não foi encontrada no portfólio de David Santos Souza.",
    path: window.location.pathname,
    noIndex: true,
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="container flex flex-1 items-center justify-center pb-24 pt-36 text-center sm:pt-44">
        <div className="max-w-xl">
          <p className="font-display text-7xl font-semibold text-primary" aria-hidden="true">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold">Página não encontrada</h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">O endereço pode ter sido digitado incorretamente ou o conteúdo pode ter mudado de lugar.</p>
          <a href="/" className="button-primary mt-9">Voltar ao portfólio</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
