import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso! 🚀");
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          setStatus(result.errors.map((e: any) => e.message).join(", "));
        } else {
          setStatus("Erro ao enviar a mensagem 😢");
        }
      }
    } catch (error) {
      setStatus("Erro de conexão. Tente novamente.");
    }
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-surface/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Mande um olá!
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
            Vamos <span className="text-gradient">Bater um papo?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto ou ideia? Me envie uma mensagem 👋
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">E-mail</h4>
                <a
                  href="mailto:devopsdavid7@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  devopsdavid7@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Telefone</h4>
                <a
                  href="tel:+5511951285236"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +55 (11) 95128-5236
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Localização</h4>
                <p className="text-muted-foreground">
                  Itapecerica da Serra - SP
                </p>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xjgvbdon"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:ring-2 focus:ring-primary/50"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:ring-2 focus:ring-primary/50"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Escreva sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>

              {/* STATUS */}
              {status && (
                <p className="text-sm text-center text-primary mt-3">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
