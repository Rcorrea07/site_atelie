const paymentOptions = [
  {
    name: "Pix",
    detail: "Sinal de 50% para reservar a produção, restante quando a peça ficar pronta.",
    marker: "01",
    className: "bg-[#d8749d] text-white",
  },
  {
    name: "Débito",
    detail: "Depósito bancário para quem prefere resolver o pagamento direto e sem link.",
    marker: "02",
    className: "bg-[#4f8b7a] text-white",
  },
  {
    name: "Crédito",
    detail: "Link de pagamento em até 12x, com juros calculados pela maquininha.",
    marker: "03",
    className: "bg-amber-100 text-stone-900",
  },
  {
    name: "Pix parcelado",
    detail: "Parcelas combinadas conforme o prazo de produção da sua encomenda.",
    marker: "04",
    className: "bg-stone-800 text-white",
  },
];

const paymentNotes = ["sinal combinado", "produção reservada", "saldo na finalização"];

export function Payment() {
  return (
    <section
      id="pagamento"
      className="relative isolate overflow-hidden bg-[#fcfaf7] px-6 py-24 sm:px-10 lg:py-36"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_15%_18%,rgba(216,116,157,0.10),transparent_30%),radial-gradient(circle_at_88%_28%,rgba(79,139,122,0.10),transparent_28%),linear-gradient(180deg,#fcfaf7_0%,#fff7f8_56%,#f6faf7_100%)]" />
      <div className="absolute left-0 top-20 -z-20 h-px w-full bg-rose-200/70" />
      <div className="absolute bottom-16 left-[7%] -z-20 hidden h-32 w-32 rounded-full border border-dashed border-teal-300/70 lg:block" />

      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm shadow-rose-100/60 ring-1 ring-rose-100"
            >
              <span className="size-2 rounded-full bg-rose-500" />
              Formas de pagamento
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-7 max-w-[12ch] text-wrap-balance break-words font-serif text-[clamp(2.65rem,6.5vw,4.8rem)] leading-[0.98] text-stone-800"
            >
              O combinado fica leve.
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-7 max-w-[58ch] text-base font-light leading-relaxed text-stone-600 sm:text-lg"
            >
              Cada encomenda começa com uma conversa simples. Você escolhe a melhor forma de
              pagamento e o ateliê reserva o tempo de produção da sua peça.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="260"
              className="mt-10 flex flex-wrap gap-3"
              aria-label="Etapas do acerto"
            >
              {paymentNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-[0_1px_0_rgba(28,25,23,0.08)]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              data-aos="fade-left"
              data-aos-delay="120"
              className="grid gap-6 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
            >
              <article className="relative overflow-hidden rounded-3xl bg-stone-800 p-7 text-white shadow-[0_18px_42px_rgba(41,37,36,0.16)] sm:p-9">
                <div className="absolute -right-10 -top-10 size-36 rounded-full bg-rose-400/30" />
                <div className="absolute -bottom-12 left-8 size-44 rounded-full bg-teal-400/20" />

                <p className="relative font-cursive text-3xl font-black leading-none text-rose-200 sm:text-4xl">
                  preferido do ateliê
                </p>
                <h3 className="relative mt-9 font-serif text-[clamp(3.2rem,7vw,5.2rem)] leading-[0.9]">
                  Pix
                </h3>
                <p className="relative mt-7 max-w-[34ch] text-sm leading-relaxed text-stone-100 sm:text-base">
                  O sinal confirma a encomenda, organiza a fila de produção e deixa tudo claro até a
                  finalização.
                </p>

                <div className="relative mt-12 rounded-2xl bg-white p-5 text-stone-800">
                  <p className="text-sm font-bold text-teal-700">entrada sugerida</p>
                  <div className="mt-2 flex items-end gap-3">
                    <span className="font-serif text-5xl leading-none sm:text-6xl">50%</span>
                    <span className="pb-2 text-sm font-semibold leading-tight text-stone-500">
                      para começar
                    </span>
                  </div>
                </div>
              </article>

              <div className="grid gap-4">
                {paymentOptions.map((option, index) => (
                  <article
                    key={option.name}
                    data-aos="fade-up"
                    data-aos-delay={180 + index * 80}
                  className="group relative rounded-3xl bg-white p-2 shadow-[0_12px_28px_rgba(216,116,157,0.10)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5"
                >
                    <div className="grid min-w-0 gap-5 rounded-2xl bg-[#fff7f8] p-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-center sm:p-6">
                      <div
                        className={`flex h-18 w-18 items-center justify-center rounded-2xl font-serif text-2xl leading-none shadow-[0_8px_18px_rgba(120,113,108,0.10)] sm:h-20 sm:w-20 sm:text-3xl ${option.className}`}
                      >
                        {option.marker}
                      </div>
                      <div className="min-w-0">
                        <h3 className="line-clamp-2 break-words font-serif text-[clamp(1.9rem,4vw,2.9rem)] leading-[0.95] text-stone-800">
                          {option.name}
                        </h3>
                        <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-stone-600">
                          {option.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
