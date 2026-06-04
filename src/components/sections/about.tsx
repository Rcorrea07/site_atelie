import Image from "next/image";
import Link from "next/link";

const careLine = [
  {
    title: "Escolha com calma",
    text: "A conversa começa pela peça, pelo uso no dia a dia e pela estampa que combina com você.",
  },
  {
    title: "Corte, costura e teste",
    text: "Cada parte passa pela mesa do ateliê antes de virar bolsa, estojo ou mimo pronto para presentear.",
  },
  {
    title: "Entrega com afeto",
    text: "A peça sai embalada com cuidado, como presente mesmo quando é um carinho para você.",
  },
];

const studioDetails = [
  "tecidos escolhidos à mão",
  "forro bem acabado",
  "zíper macio",
  "costura reforçada",
];

const craftProofs = [
  {
    value: "1",
    label: "peça por vez",
    className: "bg-[#d8749d] text-white",
  },
  {
    value: "3",
    label: "etapas de cuidado",
    className: "bg-[#4f8b7a] text-white",
  },
  {
    value: "100%",
    label: "feito no ateliê",
    className: "bg-amber-100 text-stone-900",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative isolate overflow-hidden bg-[#fff7f8] px-6 py-24 sm:px-10 lg:py-36"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_18%_20%,rgba(216,116,157,0.10),transparent_30%),radial-gradient(circle_at_78%_16%,rgba(79,139,122,0.10),transparent_28%),linear-gradient(180deg,#fff7f8_0%,#fcfaf7_58%,#f5faf7_100%)]" />
      <div className="absolute left-1/2 top-0 -z-20 h-full w-px bg-rose-200/55" />
      <div className="absolute left-8 top-24 -z-20 hidden h-[70%] w-px bg-teal-200/50 md:block" />
      <div className="absolute bottom-16 right-8 -z-20 hidden h-40 w-40 rounded-full border border-dashed border-rose-300/80 lg:block" />

      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm shadow-rose-100/60 ring-1 ring-rose-100"
            >
              <span className="size-2 rounded-full bg-rose-500" />
              Sobre o ateliê
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-7 max-w-[12ch] text-wrap-balance break-words font-serif text-[clamp(2.65rem,6.5vw,4.8rem)] leading-[0.98] text-stone-800"
            >
              O cuidado aparece no detalhe.
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-7 max-w-[58ch] text-base font-light leading-relaxed text-stone-600 sm:text-lg"
            >
              No Ateliê Sy Corrêa, a costura criativa vira companhia de rotina: útil, delicada e
              feita para carregar um pouco de carinho em cada saída.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="260"
              className="mt-10 flex flex-wrap gap-3"
              aria-label="Detalhes do acabamento"
            >
              {studioDetails.map((detail) => (
                <span
                  key={detail}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-[0_1px_0_rgba(28,25,23,0.08)]"
                >
                  {detail}
                </span>
              ))}
            </div>

            <Link
              href="#catalogo"
              data-aos="fade-up"
              data-aos-delay="340"
              className="group/button mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#d8749d] py-3 pl-7 pr-3 font-cursive text-xl font-black text-white shadow-sm shadow-rose-200/70 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-[#c76490] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-50 sm:text-2xl"
            >
              Ver catálogo
              <span className="flex size-9 items-center justify-center rounded-full bg-white/20 text-base transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5">
                →
              </span>
            </Link>
          </div>

          <div className="relative">
            <div
              data-aos="fade-left"
              data-aos-delay="120"
              className="relative ml-auto grid max-w-4xl gap-5 md:grid-cols-[minmax(0,0.92fr)_minmax(230px,0.54fr)]"
            >
              <article className="group relative rounded-3xl bg-white p-2 shadow-[0_18px_42px_rgba(216,116,157,0.14)] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-rose-100 sm:rounded-3xl">
                  <Image
                    src="/img/6.png"
                    alt="Embalagem artesanal e etiqueta do Ateliê Sy Corrêa"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-stone-950/55 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/94 p-5 shadow-[0_12px_28px_rgba(28,25,23,0.12)] sm:right-auto sm:max-w-sm">
                    <p className="font-cursive text-3xl font-black leading-none text-[#b85f87] sm:text-4xl">
                      feito à mão
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-stone-700">
                      O acabamento não aparece por acaso: ele é planejado desde a escolha do tecido
                      até o último arremate.
                    </p>
                  </div>
                </div>
              </article>

              <aside className="grid gap-4">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="220"
                  className="relative overflow-hidden rounded-3xl bg-[#4f8b7a] p-6 text-white shadow-[0_14px_30px_rgba(15,118,110,0.14)]"
                >
                  <p className="font-cursive text-2xl font-black leading-none text-rose-100 sm:text-3xl">
                    Sandrinha escolhe
                  </p>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-teal-50">
                    Estampas, combinações e medidas entram na peça com o mesmo cuidado de uma
                    encomenda pessoal.
                  </p>
                  <div className="mt-6 h-px w-full border-t border-dashed border-teal-100/70" />
                  <p className="mt-4 text-xs font-bold text-teal-100">
                    conversa próxima, sem carrinho automático
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="relative min-h-[250px] overflow-hidden rounded-3xl bg-rose-100 shadow-[0_12px_28px_rgba(216,116,157,0.12)]"
                >
                  <Image
                    src="/img/criativa.jpg"
                    alt="Peça de costura criativa com estampa delicada"
                    fill
                    sizes="(min-width: 1024px) 260px, 100vw"
                    className="object-cover"
                  />
                </div>
              </aside>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="360"
              className="relative z-10 -mt-6 grid gap-4 md:ml-10 md:max-w-2xl md:grid-cols-3"
            >
              {craftProofs.map((proof) => (
                <div
                  key={proof.label}
                  className={`rounded-2xl px-5 py-5 shadow-[0_10px_22px_rgba(120,113,108,0.12)] ${proof.className}`}
                >
                  <p className="font-serif text-3xl leading-none sm:text-4xl">{proof.value}</p>
                  <p className="mt-2 text-sm font-bold leading-tight">{proof.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)] lg:items-start">
              <div
                data-aos="fade-up"
                data-aos-delay="120"
                className="rounded-3xl bg-white p-7 shadow-[0_12px_28px_rgba(251,207,232,0.42)]"
              >
                <p className="font-cursive text-3xl font-black leading-none text-[#b85f87] sm:text-4xl">
                  a peça nasce devagar
                </p>
                <p className="mt-5 text-sm leading-relaxed text-stone-600 sm:text-base">
                  Não tem produção fria. Tem olho no tecido, mão no arremate e uma peça que sai do
                  ateliê com história para acompanhar a sua.
                </p>
              </div>

              <div className="relative rounded-3xl bg-white p-3 shadow-[0_14px_34px_rgba(15,118,110,0.10)]">
                <div className="rounded-2xl bg-[#f5fbf8] p-6 sm:p-7">
                  <div className="absolute bottom-10 left-9 top-10 hidden w-px bg-teal-200 sm:block" />
                  <div className="space-y-5">
                    {careLine.map((item, index) => (
                      <article
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={180 + index * 90}
                        className="relative rounded-2xl bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 sm:ml-8"
                      >
                        <span className="absolute -left-3 top-5 hidden size-6 rounded-full bg-rose-500 ring-4 ring-[#f5fbf8] sm:block" />
                        <p className="font-cursive text-2xl font-black leading-none text-[#b85f87] sm:text-3xl">
                          {index + 1}. {item.title}
                        </p>
                        <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-stone-600">
                          {item.text}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
