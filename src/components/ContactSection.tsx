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
            
            {/* E-MAIL */}
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

            {/* TELEFONE */}
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

            {/* WHATSAPP (Adicionado Aqui) */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 text-primary fill-current" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.115-.198.058-.372-.029-.548-.087-.174-.78-1.876-1.07-2.574-.288-.691-.58-.598-.795-.609l-.675-.011c-.223 0-.585.085-.891.419-.306.334-1.171 1.144-1.171 2.791 0 1.648 1.2 3.239 1.37 3.465.174.226 2.364 3.61 5.727 5.064 2.399 1.037 2.887.831 3.421.78.892-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-1">WhatsApp</h4>
                <a
                  href="https://wa.me/5511951285236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Manda um oi!
                </a>
              </div>
            </div>

            {/* LOCALIZAÇÃO */}
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