"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = ["Home", "Sobre", "Catálogo", "Pagamento", "Envio", "Contato"];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rose-100/70 bg-[#fcfaf7]/92 shadow-sm shadow-rose-100/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-6 px-6 py-3 sm:px-10 lg:py-3.5">
        <Link
          href="/"
          aria-label="Voltar para o início"
          className="group flex shrink-0 items-center rounded-full outline-none transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50"
        >
          <Image
            src="/img/principal rosa sem fundo.png"
            alt="Ateliê Sy Corrêa"
            width={174}
            height={88}
            priority
            className="h-auto w-[118px] object-contain drop-shadow-sm transition-transform duration-300 ease-out group-hover:-rotate-1 sm:w-[138px] lg:w-[154px]"
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 rounded-full bg-white/78 p-1.5 shadow-sm shadow-rose-100/50 ring-1 ring-rose-100/70 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-stone-700 transition-all duration-300 ease-out hover:bg-rose-50 hover:text-[#b85f87] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:text-[0.95rem]"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Buscar"
            className="flex size-10 items-center justify-center rounded-full bg-white/82 text-teal-600 shadow-sm shadow-rose-100/40 ring-1 ring-rose-100/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-rose-50 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/35/0f766e/search--v1.png"
              alt=""
              className="size-5 object-contain"
            />
          </button>
          <button
            type="button"
            aria-label="Carrinho"
            className="flex size-10 items-center justify-center rounded-full bg-[#d8749d] text-white shadow-sm shadow-rose-200/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#c76490] active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/35/ffffff/shopping-cart--v1.png"
              alt=""
              className="size-5 object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
