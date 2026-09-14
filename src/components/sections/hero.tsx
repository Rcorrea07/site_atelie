import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex w-full items-center bg-atelier-bg lg:min-h-[100dvh]"
    >
      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-14 px-6 pb-20 pt-28 sm:px-10 lg:grid-cols-[1fr_0.82fr] lg:gap-20 lg:pb-24 lg:pt-28">
        <div>
          <p className="label text-atelier-muted">
            {site.name}
            <span aria-hidden> — </span>
            {site.tagline}
          </p>

          <h1 className="display mt-8 text-[clamp(2.9rem,7.6vw,5.6rem)] text-atelier-ink">
            Peças feitas à mão,{" "}
            <em className="italic text-atelier-pinkDeep">uma de cada vez</em>.
          </h1>

          <p className="mt-9 max-w-[46ch] text-[1.05rem] leading-relaxed text-atelier-text/80">
            Bolsas, estojos e necessaires costurados sob encomenda. O tecido, o
            tamanho e o acabamento são escolhidos junto com você antes da agulha
            começar.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link
              href="#catalogo"
              className="label rounded-[2px] bg-atelier-ink px-8 py-4 text-atelier-bg transition-colors duration-500 hover:bg-atelier-pinkDeep"
            >
              Ver o catálogo
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="label text-atelier-ink underline decoration-atelier-line decoration-1 underline-offset-[8px] transition-colors duration-300 hover:decoration-atelier-pink"
            >
              Encomendar no WhatsApp
            </a>
          </div>
        </div>

        <figure className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-atelier-linen lg:aspect-auto lg:h-[70vh]">
            <Image
              src="/img/bolsa_1.jpg"
              alt="Bolsa em tecido cinza com alça estampada, feita no Ateliê Sy Corrêa"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </div>
          <figcaption className="label mt-4 text-atelier-muted">
            Bolsa de praia
            <span aria-hidden> · </span>
            tecido estruturado
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
