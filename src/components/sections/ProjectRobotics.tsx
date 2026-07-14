import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight, Bot, Code2, Gamepad2, Play, Radio, Zap } from "lucide-react";
import tutorialImage from "@/assets/video-tutorial.webp";
import SectionHeading from "@/components/ui/SectionHeading";

const receiverUrl = "https://makecode.microbit.org/S84234-74676-28856-20934";
const transmitterUrl = "https://makecode.microbit.org/S49995-27738-16406-88213";
const tutorialUrl = "https://www.youtube.com/watch?v=WSEcYFiG8aA";
const tutorialEmbedUrl = "https://www.youtube-nocookie.com/embed/WSEcYFiG8aA?autoplay=1&rel=0";

const receiverCommands = [
  { command: "Inclinação X/Y", behavior: "Converte as coordenadas recebidas em velocidade e direção para os motores M1A e M2A." },
  { command: "30 — botão A", behavior: "Aciona os dois motores por 100 ms e interrompe o movimento." },
  { command: "40 — botão B", behavior: "Executa um giro curto usando velocidades diferentes nos dois motores." },
  { command: "20 — botões A+B", behavior: "Inicia a manobra de comemoração com giro, curvas alternadas e movimento final." },
  { command: "50 — logotipo", behavior: "Executa o chute: recuo, pausa, aceleração máxima por 600 ms e parada." },
] as const;

function ExternalLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={primary ? "project-link" : "project-link project-link-secondary"}
    >
      {children}
      <ArrowUpRight className="size-4" aria-hidden="true" />
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

function ProjectRobotics() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="robotica" aria-labelledby="robotica-title" className="section-spacing scroll-mt-24 bg-surface/40">
      <div className="container">
        <SectionHeading
          id="robotica-title"
          eyebrow="Robótica educacional"
          title="Futebol de"
          highlight="robôs"
          description="Projeto desenvolvido no Microsoft MakeCode para controlar um carrinho Robotbit por rádio com duas placas micro:bit: uma instalada no robô e outra utilizada pelo jogador."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="card-surface overflow-hidden p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                <Bot className="size-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Código principal · carrinho</p>
                <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Receptor e controle dos motores</h3>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Este programa fica na micro:bit conectada ao carrinho. Ele recebe pelo rádio tanto as coordenadas de inclinação do controle quanto comandos numéricos para movimentos especiais. A extensão Robotbit transforma os valores calculados em velocidade para os motores.
            </p>

            <div className="mt-7 rounded-xl border border-border bg-background/70 p-5">
              <h4 className="flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/80">
                <Code2 className="size-4 text-primary" aria-hidden="true" /> Lógica de direção
              </h4>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">1.</strong> O rádio identifica os valores nomeados como <code className="text-primary">x</code> e <code className="text-primary">y</code>.</li>
                <li><strong className="text-foreground">2.</strong> Valores com módulo menor que 15 viram zero, criando uma zona morta que evita movimentos involuntários.</li>
                <li><strong className="text-foreground">3.</strong> O mixer combina direção e aceleração: <code className="text-primary">mDir = -y + x</code> e <code className="text-primary">mEsq = -y - x</code>.</li>
                <li><strong className="text-foreground">4.</strong> Cada resultado é limitado ao intervalo de −255 a 255 antes de chegar aos motores M1A e M2A.</li>
              </ol>
            </div>

            <div className="mt-7 overflow-hidden rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="bg-surface-elevated px-5 py-4 text-left font-semibold text-foreground">Comandos interpretados pelo carrinho</caption>
                <thead className="sr-only"><tr><th>Comando</th><th>Comportamento</th></tr></thead>
                <tbody>
                  {receiverCommands.map(({ command, behavior }) => (
                    <tr key={command} className="border-t border-border align-top">
                      <th scope="row" className="w-40 px-5 py-4 font-semibold text-primary">{command}</th>
                      <td className="px-5 py-4 leading-relaxed text-muted-foreground">{behavior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <ExternalLink href={receiverUrl} primary><Code2 className="size-4" aria-hidden="true" /> Abrir código do carrinho</ExternalLink>
            </div>
          </article>

          <div className="space-y-7">
            <article className="card-surface p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                  <Gamepad2 className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Código do jogador</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">Transmissor</h3>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                A segunda micro:bit funciona como controle remoto. O acelerômetro mapeia a inclinação vertical para valores entre −180 e 180 e a horizontal entre −120 e 120, enviando os eixos pelo rádio a cada 50 ms.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><Radio className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /> Controle e carrinho utilizam o mesmo grupo de rádio: 600.</li>
                <li className="flex gap-3"><Zap className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /> A, B, A+B e o logotipo enviam os comandos 30, 40, 20 e 50.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <ExternalLink href={transmitterUrl}><Code2 className="size-4" aria-hidden="true" /> Abrir código do controle</ExternalLink>
              </div>
            </article>

            <aside className="rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:p-7" aria-labelledby="fluxo-title">
              <h3 id="fluxo-title" className="font-display text-xl font-semibold">Fluxo da comunicação</h3>
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center text-sm">
                <div className="rounded-xl border border-border bg-background/70 p-4"><Gamepad2 className="mx-auto mb-2 size-5 text-primary" aria-hidden="true" />Controle</div>
                <ArrowUpRight className="size-5 rotate-45 text-primary" aria-hidden="true" />
                <div className="rounded-xl border border-border bg-background/70 p-4"><Bot className="mx-auto mb-2 size-5 text-primary" aria-hidden="true" />Carrinho</div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">O transmissor lê gestos e botões, envia os dados por rádio e o receptor converte cada mensagem em movimento.</p>
            </aside>
          </div>
        </div>

        <article className="card-surface mt-8 overflow-hidden" aria-labelledby="tutorial-title">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative aspect-video overflow-hidden bg-background">
              {showVideo ? (
                <iframe
                  src={tutorialEmbedUrl}
                  title="Tutorial: programação do robô jogador no MakeCode"
                  className="absolute inset-0 size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="group absolute inset-0 size-full focus-visible:ring-inset"
                  aria-label="Reproduzir tutorial do projeto"
                >
                  <img
                    src={tutorialImage}
                    alt="Prévia do vídeo sobre a programação do robô jogador no MakeCode"
                    loading="lazy"
                    decoding="async"
                    width="1920"
                    height="1080"
                    className="size-full object-cover transition duration-500 motion-safe:group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 bg-background/20 transition-colors group-hover:bg-background/10" aria-hidden="true" />
                  <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-gold transition-transform motion-safe:group-hover:scale-110" aria-hidden="true">
                    <Play className="ml-1 size-7 fill-current" />
                  </span>
                </button>
              )}
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Vídeo tutorial</p>
              <h3 id="tutorial-title" className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Programação do robô jogador</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Acompanhe a explicação do projeto no MakeCode e veja como a comunicação entre controle e carrinho é estruturada.</p>
              <div className="mt-6">
                <ExternalLink href={tutorialUrl}>Assistir no YouTube</ExternalLink>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectRobotics;
