interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 id={id} className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {description ? (
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;

