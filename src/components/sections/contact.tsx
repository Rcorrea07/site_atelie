import Image from "next/image";

const orderSteps = [
  "Escolha seus mimos no catálogo",
  "Envie um print pelo WhatsApp",
  "Combine tecido, prazo e pagamento",
];

const socialLinks = [
  {
    label: "Instagram",
    href: null,
    letter: "Ig",
  },
  {
    label: "Facebook",
    href: null,
    letter: "Fb",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5535999006252",
    letter: "Wa",
  },
];

export function Contact() {
  return (
    <>
      <section
        id="contato"
        className="relative isolate overflow-hidden bg-[#fff7f8] px-6 py-24 sm:px-10 lg:py-36"
      >
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_18%_20%,rgba(216,116,157,0.10),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(79,139,122,0.10),transparent_28%),linear-gradient(180deg,#fff7f8_0%,#fcfaf7_100%)]" />
        <div className="absolute left-1/2 top-0 -z-20 h-full w-px bg-rose-200/60" />

        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-20">
            <div>
              <span
                data-aos="fade-up"
                className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm shadow-rose-100/60 ring-1 ring-rose-100"
              >
                <span className="size-2 rounded-full bg-rose-500" />
                Atendimento pessoal
              </span>

              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-7 max-w-[13ch] text-wrap-balance break-words font-serif text-[clamp(2.65rem,6.5vw,4.8rem)] leading-[0.98] text-stone-800"
              >
                Vamos conversar sobre sua peça?
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="180"
                className="mt-7 max-w-[62ch] text-base font-light leading-relaxed text-stone-600 sm:text-lg"
              >
                O orçamento nasce de uma conversa direta. Você manda a referência, conta como quer
                usar a peça e a Sandrinha combina os próximos passos com você.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="260"
                className="mt-10 grid gap-4 sm:max-w-2xl"
              >
                {orderSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex min-w-0 items-center gap-4 rounded-full bg-white px-5 py-3.5 shadow-[0_1px_0_rgba(28,25,23,0.08)]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rose-500 font-serif text-xl leading-none text-white">
                      {index + 1}
                    </span>
                    <span className="truncate text-sm font-bold leading-tight text-stone-700 sm:text-base">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <aside
              data-aos="fade-left"
              data-aos-delay="160"
              className="relative"
            >
              <div className="absolute -left-4 top-10 hidden rotate-[-8deg] rounded-full bg-amber-100 px-5 py-3 font-cursive text-xl font-black text-stone-800 shadow-sm shadow-amber-200/60 lg:block">
                atendimento humano
              </div>

              <div className="rounded-3xl bg-white p-2 shadow-[0_18px_42px_rgba(216,116,157,0.14)]">
                <div className="relative overflow-hidden rounded-2xl bg-stone-800 p-7 text-white sm:rounded-3xl sm:p-9">
                  <div className="absolute -right-14 -top-14 size-44 rounded-full bg-rose-400/25" />
                  <div className="absolute -bottom-16 left-6 size-52 rounded-full bg-teal-400/20" />

                  <Image
                    src="/img/principal rosa sem fundo.png"
                    alt="Ateliê Sy Corrêa"
                    width={360}
                    height={180}
                    className="relative h-auto w-48 rounded-2xl bg-white/95 p-4 shadow-[0_12px_28px_rgba(0,0,0,0.12)] sm:w-52"
                  />

                  <p className="relative mt-12 line-clamp-2 break-words font-cursive text-4xl font-black leading-none text-rose-200 sm:text-5xl">
                    chama no WhatsApp
                  </p>
                  <p className="relative mt-5 max-w-[44ch] text-sm leading-relaxed text-stone-100 sm:text-base">
                    Envie o print do produto que gostou e receba uma resposta com possibilidades,
                    prazo e forma de pagamento.
                  </p>

                  <a
                    href="https://wa.me/5535999006252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button relative mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-[#d8749d] py-3 pl-7 pr-3 font-cursive text-xl font-black text-white shadow-sm shadow-rose-200/70 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-[#c76490] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-800 sm:text-2xl"
                  >
                    Chamar no WhatsApp
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/20 text-base transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="bg-stone-800 px-6 py-12 text-white sm:px-10">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-cursive text-2xl font-black leading-none text-rose-200 sm:text-3xl">
              Ateliê Sy Corrêa
            </p>
            <p className="mt-2 text-sm text-stone-300">
              © {new Date().getFullYear()} Ateliê Sy Corrêa. Feito com amor.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-12 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-rose-500 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-800"
                >
                  {social.letter}
                </a>
              ) : (
                <span
                  key={social.label}
                  aria-label={social.label}
                  className="flex size-12 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white/70"
                >
                  {social.letter}
                </span>
              )
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
