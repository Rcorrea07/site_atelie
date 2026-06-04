import Image from "next/image";

const shippingSteps = [
  {
    title: "Produção com prazo",
    text: "Cada peça é feita à mão especialmente para você. O prazo de confecção é combinado antes do pagamento.",
    tag: "ateliê",
    className: "md:col-span-7 bg-white",
  },
  {
    title: "Correios para o Brasil",
    text: "Enviamos por PAC ou Sedex. Valor e prazo final são calculados antes de fechar a encomenda.",
    tag: "envio",
    className: "md:col-span-5 bg-[#f1faf6]",
  },
  {
    title: "Rastreio da caixinha",
    text: "Quando o pedido for postado, você recebe o código para acompanhar a chegada até a sua porta.",
    tag: "rastreio",
    className: "md:col-span-12 bg-[#fff7f8]",
  },
];

const routeMarks = ["pedido confirmado", "peça embalada", "código enviado"];

export function Shipping() {
  return (
    <section
      id="envio"
      className="relative isolate overflow-hidden bg-[#f6faf7] px-6 py-24 sm:px-10 lg:py-36"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_14%_20%,rgba(79,139,122,0.10),transparent_30%),radial-gradient(circle_at_86%_24%,rgba(216,116,157,0.10),transparent_28%),linear-gradient(180deg,#f6faf7_0%,#fcfaf7_100%)]" />
      <div className="absolute left-0 top-1/2 -z-20 h-px w-full bg-teal-200/70" />
      <div className="absolute right-10 top-24 -z-20 hidden h-48 w-48 rounded-full border border-dashed border-rose-300/80 lg:block" />

      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.82fr)] lg:items-start lg:gap-20">
          <div>
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm shadow-teal-100/60 ring-1 ring-teal-100"
            >
              <span className="size-2 rounded-full bg-teal-600" />
              Como seu pedido chega
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-7 max-w-[14ch] text-wrap-balance break-words font-serif text-[clamp(2.65rem,6.5vw,4.8rem)] leading-[0.98] text-stone-800"
            >
              Da mesa de corte até sua porta.
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-11 grid items-stretch gap-6 md:grid-cols-12"
            >
              {shippingSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={`group flex min-w-0 rounded-3xl p-2 shadow-[0_12px_28px_rgba(15,118,110,0.10)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 ${step.className}`}
                >
                  <div className="relative min-h-[280px] min-w-0 flex-1 rounded-2xl p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="max-w-[70%] truncate rounded-full bg-stone-800 px-3 py-1.5 text-xs font-bold text-white">
                        {step.tag}
                      </span>
                      <span className="font-serif text-4xl leading-none text-[#d8749d]/75 sm:text-5xl">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-9 line-clamp-2 max-w-[14ch] break-words font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[0.96] text-stone-800">
                      {step.title}
                    </h3>
                    <p className="mt-5 line-clamp-4 max-w-[58ch] break-words text-sm leading-relaxed text-stone-600 sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside
            data-aos="fade-left"
            data-aos-delay="220"
            className="relative lg:sticky lg:top-28"
          >
            <div className="rounded-3xl bg-white p-2 shadow-[0_18px_42px_rgba(216,116,157,0.14)]">
              <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-rose-100 sm:rounded-3xl">
                <Image
                  src="/img/background.jpg"
                  alt="Mesa de ateliê com materiais de costura"
                  fill
                  sizes="(min-width: 1024px) 430px, 100vw"
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-stone-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/94 p-5 shadow-[0_12px_28px_rgba(28,25,23,0.12)]">
                  <p className="line-clamp-2 break-words font-cursive text-3xl font-black leading-none text-[#b85f87] sm:text-4xl">
                    embalado com calma
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm font-semibold leading-relaxed text-stone-700">
                    Antes de seguir viagem, a peça ganha proteção, carinho e conferência final.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="340"
              className="relative z-10 -mt-6 mx-auto grid max-w-sm gap-2 rounded-3xl bg-stone-800 p-3 text-white shadow-[0_16px_34px_rgba(41,37,36,0.16)]"
            >
              {routeMarks.map((mark) => (
                <div
                  key={mark}
                  className="flex min-w-0 items-center justify-between gap-4 rounded-full bg-white/10 px-4 py-3 text-sm font-bold"
                >
                  <span className="truncate">{mark}</span>
                  <span className="size-2 rounded-full bg-rose-300" />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
