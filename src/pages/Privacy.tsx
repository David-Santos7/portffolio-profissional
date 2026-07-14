import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteConfig } from "@/data/site";
import { usePageMetadata } from "@/hooks/usePageMetadata";

function Privacy() {
  usePageMetadata({
    title: "Política de Privacidade | David Santos Souza",
    description: "Informações sobre o tratamento dos dados enviados pelo formulário de contato do portfólio de David Santos Souza.",
    path: "/privacidade",
  });

  return (
    <div className="min-h-screen bg-background">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="container pb-24 pt-36 sm:pt-44">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Privacidade</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Política de Privacidade</h1>
          <p className="mt-5 text-sm text-muted-foreground">Última atualização: 13 de julho de 2026.</p>

          <div className="legal-content mt-10">
            <section aria-labelledby="privacy-scope">
              <h2 id="privacy-scope">Escopo</h2>
              <p>Esta política explica como os dados enviados pelo formulário de contato de davidss.com.br são utilizados. O site não utiliza área de cadastro, publicidade comportamental ou ferramentas próprias de análise de audiência.</p>
            </section>

            <section aria-labelledby="privacy-data">
              <h2 id="privacy-data">Dados enviados</h2>
              <p>O formulário solicita nome, endereço de e-mail e mensagem. Esses dados são fornecidos voluntariamente e usados somente para responder ao contato e dar continuidade à conversa iniciada pela pessoa visitante.</p>
            </section>

            <section aria-labelledby="privacy-services">
              <h2 id="privacy-services">Serviços utilizados</h2>
              <p>O envio do formulário é processado pelo Formspree. O site também solicita arquivos de fonte ao Google Fonts. Esses serviços podem receber dados técnicos necessários à conexão, como endereço IP e informações do navegador, conforme suas próprias políticas.</p>
              <p>
                Consulte as políticas do{" "}
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Formspree<span className="sr-only"> (abre em nova aba)</span></a>
                {" "}e do{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google<span className="sr-only"> (abre em nova aba)</span></a>.
              </p>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2 id="privacy-retention">Armazenamento e proteção</h2>
              <p>As mensagens podem permanecer no Formspree e na caixa de e-mail usada para atendimento. O acesso operacional fica restrito ao responsável pelo portfólio e aos provedores necessários para processar o contato. Os dados não são comercializados.</p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights">Solicitações sobre seus dados</h2>
              <p>
                Para solicitar informações, correção ou exclusão de uma mensagem enviada, entre em contato pelo e-mail{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. A solicitação será analisada considerando as obrigações legais e as limitações dos serviços envolvidos.
              </p>
            </section>

            <section aria-labelledby="privacy-updates">
              <h2 id="privacy-updates">Atualizações</h2>
              <p>Esta política poderá ser atualizada caso o formulário, os serviços externos ou a forma de tratamento dos dados sejam alterados. A data indicada no início da página registra a versão vigente.</p>
            </section>
          </div>

          <a href="/" className="button-secondary mt-12">Voltar ao portfólio</a>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default Privacy;
