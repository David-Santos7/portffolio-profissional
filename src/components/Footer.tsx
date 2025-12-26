import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import logoDSS from "@/assets/logo-site-amarelo.png";
// se o alias @ não funcionar, use:
// import logoDSS from "../assets/logo-site-amarelo.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/david-santos-souza-130151260/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/David-Santos7", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="py-18 border-t border-border bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center">

          {/* Logo sem fundo */}
          <div className="flex items-center gap-2 mb-6">
            <img
              src={logoDSS}
              alt="Logo DSS"
              className="w-[170px] h-[170px] object-contain"            />
          </div>

          {/* Name */}
          <h3 className="font-display text-2xl font-semibold mb-2">
            David Santos Souza
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            Transformando ideias em experiências digitais memoráveis.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-10">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} David Santos Souza. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Termos de Uso
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
