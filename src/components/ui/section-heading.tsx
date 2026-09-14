import type { ReactNode } from "react";

/* Cabeçalho de seção: número + rótulo em mono, título serifado.
   É a única forma de abrir uma seção no site — repetida, não reinventada. */
export function SectionHeading({
  index,
  label,
  title,
  tone = "light",
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode;
  /** `dark` inverte as cores para usar sobre fundo escuro */
  tone?: "light" | "dark";
  className?: string;
}) {
  const labelColor = tone === "dark" ? "text-atelier-bg/55" : "text-atelier-muted";
  const titleColor = tone === "dark" ? "text-atelier-bg" : "text-atelier-ink";

  return (
    <div className={className}>
      <p className={`label ${labelColor}`}>
        <span className="text-atelier-pink">{index}</span>
        <span aria-hidden> — </span>
        {label}
      </p>
      <h2
        className={`display mt-6 text-[clamp(2.3rem,5vw,4rem)] ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  );
}
