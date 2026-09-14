import ParallaxStripSlider from "@/components/ui/parallax-strip-slider";
import { SectionHeading } from "@/components/ui/section-heading";
import { collection } from "@/data/collection";

/* 04 — Galeria imersiva. Fundo escuro para as fotos respirarem e para
   quebrar o ritmo claro do resto da página. */
export function Collection() {
  return (
    <section id="colecao" className="bg-atelier-ink">
      <div className="mx-auto max-w-[1300px] px-6 pb-14 pt-28 sm:px-10 lg:pb-16 lg:pt-36">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <SectionHeading
            index="04"
            label="Coleções"
            tone="dark"
            title="Nenhuma sai igual à anterior."
          />
          <p className="max-w-[44ch] text-atelier-bg/60 lg:pb-3">
            A estampa muda, o tamanho muda, o forro muda. O que se repete é o
            acabamento.
          </p>
        </div>
      </div>

      <div className="h-[86vh] min-h-[520px] w-full">
        <ParallaxStripSlider
          slides={collection}
          autoplay
          accentColor="#fcfaf7"
          backgroundColor="#1f1b18"
        />
      </div>
    </section>
  );
}
