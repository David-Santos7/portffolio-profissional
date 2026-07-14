import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

type SubmissionStatus =
  | { state: "idle" }
  | { state: "sending"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

interface FormspreeResponse {
  errors: readonly string[];
}

const initialStatus: SubmissionStatus = { state: "idle" };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseFormspreeResponse(payload: unknown): FormspreeResponse {
  if (!isRecord(payload) || !Array.isArray(payload.errors)) {
    return { errors: [] };
  }

  const messages = payload.errors.flatMap((error) => {
    if (!isRecord(error) || typeof error.message !== "string") {
      return [];
    }

    return error.message.trim() ? [error.message] : [];
  });

  return { errors: messages };
}

function ContactSection() {
  const [status, setStatus] = useState<SubmissionStatus>(initialStatus);
  const submissionLock = useRef(false);
  const feedbackRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status.state === "error") {
      feedbackRef.current?.focus();
    }
  }, [status.state]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionLock.current) {
      return;
    }

    submissionLock.current = true;
    const form = event.currentTarget;
    setStatus({ state: "sending", message: "Enviando mensagem…" });

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const payload: unknown = await response.json().catch(() => null);
        parseFormspreeResponse(payload);
        throw new Error("submission_failed");
      }

      form.reset();
      setStatus({ state: "success", message: "Mensagem enviada com sucesso. Em breve entrarei em contato!" });
    } catch {
      setStatus({
        state: "error",
        message: "Não foi possível enviar sua mensagem. Verifique sua conexão e tente novamente.",
      });
    } finally {
      submissionLock.current = false;
    }
  };

  const isSending = status.state === "sending";

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-spacing scroll-mt-24 bg-surface/40">
      <div className="container">
        <SectionHeading id="contato-title" eyebrow="Contato" title="Vamos conversar sobre" highlight="seu projeto?" description="Estou disponível para oportunidades e colaborações em desenvolvimento front-end, educação e tecnologia." />

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <address className="space-y-4 not-italic">
            <ContactLink icon={Mail} label="E-mail" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <ContactLink icon={Phone} label="Telefone" value={siteConfig.phoneDisplay} href={`tel:${siteConfig.phoneHref}`} />
            <ContactLink icon={MessageCircle} label="WhatsApp" value="Iniciar conversa" href={siteConfig.whatsapp} external />
            <div className="flex items-start gap-4 rounded-xl p-3">
              <ContactIcon icon={MapPin} />
              <div><p className="font-semibold">Localização</p><p className="mt-1 text-sm text-muted-foreground">{siteConfig.location}</p></div>
            </div>
          </address>

          <form onSubmit={handleSubmit} action="https://formspree.io/f/xjgvbdon" method="POST" aria-busy={isSending} className="card-surface space-y-5 p-6 sm:p-8">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-company">Não preencha este campo</label>
              <input id="contact-company" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <label htmlFor="contact-name" className="form-label">Nome</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" minLength={2} maxLength={80} required className="form-control" placeholder="Seu nome" />
            </div>
            <div>
              <label htmlFor="contact-email" className="form-label">E-mail</label>
              <input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={254} required className="form-control" placeholder="seu@email.com" />
            </div>
            <div>
              <label htmlFor="contact-message" className="form-label">Mensagem</label>
              <textarea id="contact-message" name="message" rows={5} minLength={10} maxLength={2000} required aria-describedby="contact-message-hint" className="form-control resize-y" placeholder="Conte um pouco sobre sua ideia ou oportunidade…" />
              <p id="contact-message-hint" className="mt-2 text-xs text-muted-foreground">Use entre 10 e 2.000 caracteres.</p>
            </div>
            <button type="submit" disabled={isSending} className="button-primary w-full disabled:cursor-wait disabled:opacity-70">
              <Send className="size-4" aria-hidden="true" />
              {isSending ? "Enviando…" : "Enviar mensagem"}
            </button>
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              Ao enviar, você concorda com o uso dos dados para resposta ao contato, conforme a{" "}
              <a href="/privacidade" className="text-link">Política de Privacidade</a>.
            </p>
            <p
              ref={feedbackRef}
              role={status.state === "error" ? "alert" : status.state === "idle" ? undefined : "status"}
              tabIndex={status.state === "error" ? -1 : undefined}
              className={`min-h-6 text-center text-sm ${status.state === "error" ? "text-red-400" : "text-primary"}`}
            >
              {status.state === "idle" ? null : status.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

interface ContactLinkProps {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function ContactIcon({ icon: Icon }: Pick<ContactLinkProps, "icon">) {
  return <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true"><Icon className="size-5" /></span>;
}

function ContactLink({ icon, label, value, href, external = false }: ContactLinkProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl p-3">
      <ContactIcon icon={icon} />
      <div>
        <p className="font-semibold">{label}</p>
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="text-link mt-1 break-all text-sm">
          {value}{external ? <span className="sr-only"> (abre em nova aba)</span> : null}
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
