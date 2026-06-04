import Image from "next/image";
import Link from "next/link";

const craftNotes = ["Bolsas", "Estojos", "Necessaires", "Costura criativa"];

const studioPromises = [
  "Acabamento cuidadoso",
  "Tecidos escolhidos à mão",
  "Peças feitas sob encomenda",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100dvh] w-full items-center overflow-hidden bg-[#fcfaf7] px-6 pb-20 pt-32 sm:px-10 lg:pb-24 lg:pt-36"
    >
      <Image
        src="/img/background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover opacity-[0.13]"
      />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(216,116,157,0.10),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(79,139,122,0.10),transparent_30%),linear-gradient(110deg,rgba(252,250,247,0.98)_0%,rgba(255,247,248,0.94)_52%,rgba(252,250,247,0.9)_100%)]" />
      <div className="absolute left-0 top-24 -z-10 h-px w-full bg-rose-100/80" />

      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-2xl">
          <div
            data-aos="fade-up"
            className="mb-7 inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm shadow-rose-100/50 ring-1 ring-rose-100/80 backdrop-blur"
          >
            <span className="size-2 rounded-full bg-rose-500 shadow-sm shadow-rose-300" />
            Ateliê Sy Corrêa
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="120"
            className="text-wrap-balance break-words font-serif text-[clamp(2.85rem,7vw,5rem)] leading-[0.98] text-stone-800"
          >
            Costura criativa
            <span className="block text-rose-400">com carinho de presente</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="240"
            className="mt-7 max-w-[62ch] text-base font-light leading-relaxed text-stone-600 sm:text-lg"
          >
            Bolsas, estojos e mimos artesanais para organizar a rotina, presentear com afeto
            e levar um pedacinho do ateliê para o dia a dia.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="340"
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-full bg-[#d8749d] px-8 py-3.5 font-cursive text-xl font-black text-white shadow-sm shadow-rose-200/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#c76490] active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 sm:text-2xl"
            >
              Ver peças artesanais
            </Link>
            <Link
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-8 py-3.5 text-sm font-semibold text-stone-700 shadow-sm shadow-rose-100/40 ring-1 ring-rose-100/80 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-rose-50 hover:text-[#b85f87] active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50 sm:text-base"
            >
              Encomendar uma peça
            </Link>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="460"
            className="mt-11 grid gap-4 sm:grid-cols-3"
          >
            {studioPromises.map((promise) => (
              <div
                key={promise}
                className="rounded-2xl bg-white/76 px-5 py-4 text-sm font-semibold leading-snug text-stone-600 shadow-sm shadow-rose-100/50"
              >
                <span className="mb-2 block h-px w-10 border-t-2 border-dashed border-rose-300" />
                {promise}
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="220"
          className="relative mx-auto w-full max-w-[680px] lg:mr-0"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-rose-100/45 blur-2xl" />

          <div className="relative rounded-3xl bg-white/90 p-3 shadow-[0_18px_42px_rgba(216,116,157,0.14)] sm:p-4">
            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-rose-50 sm:min-h-[520px] sm:rounded-3xl">
                <Image
                  src="/img/bolsa_1.jpg"
                  alt="Bolsa artesanal floral feita no Ateliê Sy Corrêa"
                  fill
                  priority
                  sizes="(min-width: 1024px) 300px, 90vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 font-cursive text-xl font-black leading-none text-[#b85f87] shadow-sm shadow-stone-900/10 sm:text-2xl">
                  feita à mão
                </div>
              </div>

              <div className="grid gap-3">
                <div className="relative overflow-hidden rounded-2xl bg-stone-50 p-6 sm:rounded-3xl">
                  <div className="absolute right-4 top-4 rounded-full bg-[#4f8b7a] px-3 py-1 text-xs font-bold text-white shadow-sm shadow-teal-100">
                    100% artesanal
                  </div>
                  <Image
                    src="/img/principal rosa sem fundo.png"
                    alt="Logo do Ateliê Sy Corrêa"
                    width={420}
                    height={220}
                    priority
                    className="mx-auto mt-8 h-auto w-full max-w-[300px] object-contain drop-shadow-sm"
                  />
                  <div className="mt-7 rounded-2xl bg-white px-5 py-4 text-center text-sm font-medium leading-relaxed text-stone-600 shadow-sm shadow-rose-100/50">
                    Peças úteis, fofas e feitas com calma, ponto por ponto.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-rose-50">
                    <Image
                      src="/img/necessaire.jpg"
                      alt="Necessaire artesanal estampada"
                      fill
                      sizes="220px"
                      className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-rose-50">
                    <Image
                      src="/img/estojo.jpg"
                      alt="Estojo artesanal estampado"
                      fill
                      sizes="220px"
                      className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="420"
            className="absolute -bottom-6 left-1/2 flex w-[92%] -translate-x-1/2 flex-wrap justify-center gap-2 rounded-full bg-white/95 px-4 py-3 shadow-lg shadow-rose-100/70 sm:w-auto sm:px-5"
          >
            {craftNotes.map((note) => (
              <span
                key={note}
                className="rounded-full bg-rose-50 px-3 py-1.5 text-xs font-semibold text-stone-600"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
