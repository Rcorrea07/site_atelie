import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { orderSteps } from "@/data/order";

/* 05 — Reúne o que antes eram duas seções (pagamento e envio) numa
   leitura só, de cima para baixo. */
export function Order() {
  return (
    <section id="encomenda" className="bg-atelier-linen py-28 lg:py-40">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index="05"
                label="Encomenda"
                title="Como sua peça nasce."
              />
              <p className="mt-9 max-w-[38ch] text-atelier-text/80">
                Do primeiro print no WhatsApp até o código de rastreio, são
                quatro passos — e nenhum deles acontece sem você saber o valor e
                o prazo antes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol>
              {orderSteps.map((step, index) => (
                <li
                  key={step.number}
                  className={`grid gap-4 border-t border-atelier-line py-9 sm:grid-cols-[4.5rem_1fr] sm:gap-8 ${
                    index === orderSteps.length - 1
                      ? "border-b border-atelier-line"
                      : ""
                  }`}
                >
                  <span className="label pt-2 text-atelier-pink">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="display text-[clamp(1.8rem,3vw,2.5rem)] text-atelier-ink">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[56ch] leading-relaxed text-atelier-text/80">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
