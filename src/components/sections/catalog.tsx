import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Bolsas",
    price: "98,74",
    oldPrice: "127,32",
    img: "/img/bolsa_1.jpg",
    tag: "Para levar tudo",
    note: "Rotina, passeio e presente",
    description:
      "Bolsa artesanal com estampa delicada, espaço confortável e acabamento feito para acompanhar o dia inteiro.",
    accent: "bg-[#d8749d] text-white",
    tone: "bg-[#fff7f8]",
    frame: "rotate-[-1.5deg]",
    imageClass: "aspect-[4/5]",
  },
  {
    id: 2,
    name: "Estojos",
    price: "53,99",
    oldPrice: "68,99",
    img: "/img/estojo.jpg",
    tag: "Pequenos tesouros",
    note: "Lápis, maquiagem e acessórios",
    description: "Compacto, charmoso e fácil de levar na bolsa sem perder nada no caminho.",
    accent: "bg-[#4f8b7a] text-white",
    tone: "bg-[#f1faf6]",
    frame: "rotate-[1.25deg]",
    lift: "",
    imageClass: "aspect-[4/3]",
  },
  {
    id: 3,
    name: "Praia",
    price: "78,99",
    oldPrice: "87,90",
    img: "/img/praia.jpg",
    tag: "Verão fofo",
    note: "Leve, colorido e prático",
    description: "Peças alegres para levar o essencial com carinho nos dias de sol.",
    accent: "bg-amber-300 text-stone-900",
    tone: "bg-[#fff9e9]",
    frame: "rotate-[-0.75deg]",
    lift: "md:mt-10",
    imageClass: "aspect-[4/3]",
  },
  {
    id: 4,
    name: "Costura",
    price: "45,99",
    oldPrice: "57,90",
    img: "/img/criativa.jpg",
    tag: "Mimos úteis",
    note: "Para presentear sem erro",
    description: "Itens afetivos, bem-acabados e cheios de personalidade para deixar a rotina mais bonita.",
    accent: "bg-stone-800 text-white",
    tone: "bg-[#f7f4ef]",
    frame: "rotate-[0.85deg]",
    lift: "",
    imageClass: "aspect-[16/11]",
  },
];

const stitches = ["Escolha a peça", "Combine o tecido", "Receba com carinho"];

const atelierMarks = ["tecido", "forro", "zíper", "acabamento"];

export function Catalog() {
  const [featured, ...supportingProducts] = products;

  return (
    <section
      id="catalogo"
      className="relative isolate overflow-hidden bg-[#fcfaf7] px-6 py-24 sm:px-10 lg:py-36"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_12%_18%,rgba(216,116,157,0.10),transparent_32%),radial-gradient(circle_at_86%_28%,rgba(79,139,122,0.10),transparent_30%),linear-gradient(180deg,#fcfaf7_0%,#fff7f8_46%,#f6faf7_100%)]" />
      <div className="absolute left-0 top-16 -z-20 h-px w-full bg-rose-200/70" />
      <div className="absolute left-6 top-0 -z-20 hidden h-full w-px bg-rose-200/50 md:block" />
      <div className="absolute right-[9%] top-24 -z-20 hidden h-[78%] w-px bg-teal-200/50 lg:block" />

      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm shadow-rose-100/60 ring-1 ring-rose-100"
            >
              <span className="size-2 rounded-full bg-rose-500" />
              Vitrine do ateliê
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-7 max-w-[12ch] text-wrap-balance break-words font-serif text-[clamp(2.65rem,6.5vw,4.8rem)] leading-[0.98] text-stone-800"
            >
              Peças com jeitinho de ateliê.
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-7 max-w-[56ch] text-base font-light leading-relaxed text-stone-600"
            >
              Uma seleção feita para parecer mesa de corte: tecido, etiqueta, acabamento e convite
              para escolher a peça que combina com a sua rotina.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="260"
              className="mt-10 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1"
            >
              {stitches.map((item) => (
                <div
                  key={item}
                  className="group flex min-w-0 items-center justify-between gap-4 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-700 shadow-[0_1px_0_rgba(15,23,42,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5"
                >
                  <span className="truncate">{item}</span>
                  <span className="size-2 rounded-full bg-rose-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.7]" />
                </div>
              ))}
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="340"
              className="mt-8 hidden max-w-sm grid-cols-4 gap-2 md:grid"
              aria-label="Detalhes de ateliê"
            >
              {atelierMarks.map((mark) => (
                <span
                  key={mark}
                  className="rounded-full border border-dashed border-rose-300/90 bg-rose-50/70 px-3 py-2 text-center text-xs font-bold text-rose-700"
                >
                  {mark}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <article
              data-aos="fade-up"
              data-aos-delay="120"
              className="group relative ml-auto max-w-4xl"
            >
              <div className="relative rounded-3xl bg-white p-2 shadow-[0_18px_42px_rgba(216,116,157,0.14)] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1">
                <div className="grid overflow-hidden rounded-2xl bg-rose-50 sm:rounded-3xl lg:grid-cols-[minmax(0,1.08fr)_minmax(310px,0.78fr)]">
                  <div className={`relative overflow-hidden ${featured.imageClass} lg:aspect-auto lg:min-h-[620px]`}>
                    <Image
                      src={featured.img}
                      alt={`${featured.name} artesanal com acabamento delicado`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 650px, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-950/58 to-transparent" />
                    <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm shadow-teal-100">
                      {featured.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-5 shadow-[0_12px_28px_rgba(28,25,23,0.12)] sm:left-6 sm:right-auto sm:max-w-sm">
                      <p className="line-clamp-2 break-words font-cursive text-2xl font-black leading-none text-[#b85f87] sm:text-3xl">
                        {featured.note}
                      </p>
                      <p className="mt-3 line-clamp-3 text-sm font-medium leading-relaxed text-stone-700">
                        {featured.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col justify-between gap-10 bg-[#fff7f8] p-7 sm:p-9">
                    <div className="min-w-0">
                      <p className="line-clamp-2 break-words font-cursive text-3xl font-black leading-none text-[#b85f87]">
                        estrela da semana
                      </p>
                      <h3 className="mt-6 whitespace-nowrap font-serif text-[clamp(2.7rem,5vw,4.2rem)] leading-[0.96] text-stone-800">
                        {featured.name}
                      </h3>
                      <p className="mt-7 max-w-[36ch] text-sm leading-relaxed text-stone-600 sm:text-base">
                        Grande o bastante para acompanhar o dia, delicada o bastante para virar
                        presente especial.
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                        <span className="font-serif text-4xl leading-none text-stone-800 sm:text-5xl">
                          R$ {featured.price}
                        </span>
                        <span className="pb-1 text-sm font-semibold text-stone-400 line-through decoration-rose-400 decoration-2">
                          R$ {featured.oldPrice}
                        </span>
                      </div>

                      <Link
                        href="#contato"
                        className="group/button mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#d8749d] py-2.5 pl-7 pr-2.5 font-cursive text-xl font-black text-white shadow-sm shadow-rose-200/70 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-[#c76490] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-50 sm:text-2xl"
                      >
                        Encomendar
                        <span className="flex size-9 items-center justify-center rounded-full bg-white/20 text-base transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="mt-8 grid items-stretch gap-6 md:grid-cols-3">
              {supportingProducts.map((product, index) => (
                <article
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={220 + index * 90}
                  className={`group relative flex min-w-0 ${product.frame} ${product.lift} transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:rotate-0`}
                >
                  <div className={`relative flex h-full min-h-[520px] min-w-0 flex-1 flex-col rounded-3xl ${product.tone} p-2 shadow-[0_12px_26px_rgba(120,113,108,0.10)]`}>
                    <div className="relative shrink-0 overflow-hidden rounded-2xl">
                      <div className={`relative ${product.imageClass}`}>
                        <Image
                          src={product.img}
                          alt={`${product.name} artesanal do Ateliê Sy Corrêa`}
                          fill
                          sizes="(min-width: 768px) 300px, 100vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                      </div>
                      <span className={`absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full px-3 py-1.5 text-xs font-bold ${product.accent}`}>
                        {product.tag}
                      </span>
                    </div>

                    <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between p-5">
                      <div className="min-w-0">
                        <p className="line-clamp-2 min-h-[3.4rem] break-words font-cursive text-2xl font-black leading-none text-[#b85f87]">
                          {product.note}
                        </p>
                        <h3 className="mt-4 min-h-[2.9rem] whitespace-nowrap font-serif text-[clamp(1.8rem,2.6vw,2.35rem)] leading-[0.98] text-stone-800">
                          {product.name}
                        </h3>
                        <p className="mt-4 line-clamp-3 break-words text-sm leading-relaxed text-stone-600">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-6 min-w-0">
                        <div className="flex min-w-0 flex-wrap items-end gap-x-2 gap-y-1">
                          <span className="truncate font-serif text-2xl leading-none text-stone-800 sm:text-3xl">
                            R$ {product.price}
                          </span>
                          <span className="pb-0.5 text-xs font-semibold text-stone-400 line-through decoration-rose-400 decoration-2">
                            R$ {product.oldPrice}
                          </span>
                        </div>
                        <Link
                          href="#contato"
                          className="mt-5 inline-flex w-full min-w-0 items-center justify-between gap-3 rounded-full bg-white px-4 py-3 text-sm font-bold text-stone-800 shadow-[0_1px_0_rgba(28,25,23,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-stone-800 hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-50"
                        >
                          <span className="truncate">Pedir esta peça</span>
                          <span className="flex size-8 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="260"
          className="mt-16 grid overflow-hidden rounded-3xl bg-stone-800 text-white shadow-[0_18px_42px_rgba(41,37,36,0.16)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-[260px] overflow-hidden bg-rose-200 lg:min-h-full">
            <Image
              src="/img/criativa.jpg"
              alt="Itens de costura criativa com estampas coloridas"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/50 via-transparent to-rose-500/20" />
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="line-clamp-2 break-words font-cursive text-3xl font-black leading-none text-rose-200 sm:text-4xl">
              uma peça com a sua carinha
            </p>
            <p className="mt-5 max-w-[66ch] text-sm leading-relaxed text-stone-100 sm:text-base">
              Quer mudar tecido, tamanho, cor ou combinação? A encomenda começa com uma conversa
              simples para entender sua rotina e transformar a ideia em uma peça útil e fofa.
            </p>

            <Link
              href="#contato"
              className="group/button mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white py-3 pl-7 pr-3 text-sm font-bold text-stone-800 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-rose-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-800 sm:text-base"
            >
              Pedir personalizada
              <span className="flex size-9 items-center justify-center rounded-full bg-rose-50 text-rose-500 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
