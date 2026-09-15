import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/products";

export function Catalog() {
  return (
    <section id="catalogo" className="bg-atelier-bg py-28 lg:py-40">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-20">
            <SectionHeading
              index="03"
              label="Catálogo"
              title="O que sai do ateliê."
            />
            <p className="max-w-[40ch] text-atelier-muted lg:pb-2">
              Valores por peça, no tamanho padrão. Personalização e prazo são
              combinados na conversa.
            </p>
          </div>
        </Reveal>

        {/* Duas colunas com imagem deitada: as fotos são 16:9 e um recorte
            em retrato cortaria a peça. */}
        <div className="mt-16 grid gap-x-8 gap-y-16 lg:mt-24 lg:grid-cols-2 lg:gap-x-12">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 90}>
              <Link href="#contato" className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-atelier-linen">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-atelier-line pt-4">
                  <h3 className="display text-2xl text-atelier-ink sm:text-3xl">
                    {product.name}
                  </h3>
                  <span className="label shrink-0 text-atelier-ink">
                    R$ {product.price}
                  </span>
                </div>

                <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-atelier-muted">
                  {product.detail}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-20 flex flex-col gap-5 border-t border-atelier-line pt-10 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="max-w-[48ch] text-atelier-text/80">
              Quer outro tecido, outro tamanho ou um nome bordado na alça? A
              encomenda personalizada começa pela conversa.
            </p>
            <Link
              href="#contato"
              className="label shrink-0 text-atelier-ink underline decoration-atelier-line decoration-1 underline-offset-[8px] transition-colors duration-300 hover:decoration-atelier-pink"
            >
              Pedir personalizada
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
