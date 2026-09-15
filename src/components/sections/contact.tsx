import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "Facebook", href: site.facebook },
  { label: "WhatsApp", href: site.whatsapp },
].filter((social): social is { label: string; href: string } =>
  Boolean(social.href),
);

export function Contact() {
  return (
    <>
      <section id="contato" className="bg-atelier-bg py-28 lg:py-44">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
            <Reveal>
              <SectionHeading
                index="06"
                label="Contato"
                title="Vamos combinar a sua peça?"
              />

              <p className="mt-9 max-w-[46ch] text-[1.05rem] leading-relaxed text-atelier-text/80">
                Manda o print da peça que gostou. Respondo com as
                possibilidades de tecido, o prazo de produção e a forma de
                pagamento.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-8">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label rounded-[2px] bg-atelier-ink px-8 py-4 text-atelier-bg transition-colors duration-500 hover:bg-atelier-pinkDeep"
                >
                  Chamar no WhatsApp
                </a>
                <span className="label text-atelier-muted">
                  {site.whatsappLabel}
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-atelier-linen">
                  <Image
                    src="/img/6.webp"
                    alt="Etiqueta, adesivo e sacola de papel do Ateliê Sy Corrêa"
                    fill
                    sizes="(min-width: 1024px) 44vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="label mt-4 text-atelier-muted">
                  Toda peça sai embalada assim
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-atelier-line bg-atelier-bg px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="display text-2xl text-atelier-ink">{site.name}</p>
            <p className="label mt-3 text-atelier-muted">
              © {new Date().getFullYear()}
              <span aria-hidden> · </span>
              {site.tagline}
            </p>
          </div>

          {socials.length > 0 && (
            <nav aria-label="Redes sociais" className="flex flex-wrap gap-7">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label text-atelier-muted transition-colors duration-300 hover:text-atelier-ink"
                >
                  {social.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </footer>
    </>
  );
}
