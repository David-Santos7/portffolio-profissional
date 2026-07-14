import { Github, Linkedin } from "lucide-react";
import logo from "@/assets/logo-site-amarelo.webp";
import { navigation, siteConfig } from "@/data/site";

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container flex flex-col items-center text-center">
        <a href="/#inicio" aria-label="Voltar ao início" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <img src={logo} alt="Marca de David Santos Souza" width="360" height="191" loading="lazy" decoding="async" className="h-auto w-36 object-contain" />
        </a>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">Desenvolvimento front-end, educação e suporte de TI reunidos em experiências digitais claras e responsivas.</p>
        <nav aria-label="Navegação do rodapé" className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          {navigation.map(({ id, label }) => <a key={id} href={`/#${id}`} className="text-link inline-flex min-h-11 items-center">{label}</a>)}
        </nav>
        <div className="mt-7 flex gap-3">
          <a className="social-link" href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)"><Github aria-hidden="true" /></a>
          <a className="social-link" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (abre em nova aba)"><Linkedin aria-hidden="true" /></a>
        </div>
        <div className="mt-9 w-full border-t border-border pt-7">
          <a href="/privacidade" className="text-link inline-flex min-h-11 items-center text-sm">Política de Privacidade</a>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} David Santos Souza. Conteúdo e código sob seus respectivos direitos.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
