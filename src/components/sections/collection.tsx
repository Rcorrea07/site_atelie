import ParallaxStripSlider from "@/components/ui/parallax-strip-slider";
import { collection } from "@/data/collection";

/* 04 — Galeria imersiva. Fundo escuro para as fotos respirarem e para
   quebrar o ritmo claro do resto da página. */
export function Collection() {
  return (
    <section id="colecao" className="bg-atelier-linen">
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
