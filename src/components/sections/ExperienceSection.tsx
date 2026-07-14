import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, experiences } from "@/data/experiences";
import type { TimelineItem } from "@/types/portfolio";

interface TimelineProps {
  title: string;
  items: readonly TimelineItem[];
  icon: typeof BriefcaseBusiness;
}

function Timeline({ title, items, icon: Icon }: TimelineProps) {
  return (
    <div>
      <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold">
        <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
          <Icon className="size-5" />
        </span>
        {title}
      </h3>
      <ol className="relative ml-2 space-y-6 border-l border-border pl-5 sm:ml-5 sm:pl-8">
        {items.map((item) => (
          <li key={`${item.title}-${item.organization}`} className="relative">
            <span className="absolute -left-[1.8rem] top-6 size-4 rounded-full border-2 border-primary bg-background sm:-left-[2.6rem]" aria-hidden="true" />
            <article className="card-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.period}</p>
              <h4 className="mt-2 font-display text-xl font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm font-medium text-foreground/80">{item.organization}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="section-spacing scroll-mt-24 bg-surface/40">
      <div className="container">
        <SectionHeading id="experiencia-title" eyebrow="Trajetória" title="Experiência e" highlight="formação contínua" description="Uma carreira construída entre educação e tecnologia, com aprendizado constante e aplicação prática." />
        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Timeline title="Experiência profissional" items={experiences} icon={BriefcaseBusiness} />
          <Timeline title="Formação acadêmica" items={education} icon={GraduationCap} />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
