import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const finishing = [
  { term: "Tecido", value: "Escolhido à mão, peça por peça" },
  { term: "Forro", value: "Interno, acabado e reforçado" },
  { term: "Zíper", value: "Macio, testado antes de sair" },
  { term: "Costura", value: "Reforçada nos pontos de peso" },
];

export function About() {
  return (
    <section id="atelie" className="bg-atelier-bg py-28 lg:py-40">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              index="01"
              label="O ateliê"
              title="O cuidado aparece no detalhe."
            />

            <p className="mt-9 max-w-[52ch] text-[1.05rem] leading-relaxed text-atelier-text/80">
              O Ateliê Sy Corrêa é uma mesa de corte, uma máquina de costura e
              tempo. Nada sai em série: cada peça é cortada, costurada e
              conferida antes de ser embalada — por isso o prazo é combinado
              antes de tudo.
            </p>

            <dl className="mt-14 max-w-lg">
              {finishing.map((row) => (
                <div
                  key={row.term}
                  className="flex items-baseline justify-between gap-6 border-t border-atelier-line py-4"
                >
                  <dt className="label text-atelier-ink">{row.term}</dt>
                  <dd className="text-right text-sm text-atelier-muted">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <figure>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-atelier-linen">
                <Image
                  src="/img/background.jpg"
                  alt="Mesa do ateliê com linhas, fita métrica, tesoura e tecidos estampados"
                  fill
                  sizes="(min-width: 1024px) 52vw, 92vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="label mt-4 text-atelier-muted">
                A mesa onde tudo começa
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
