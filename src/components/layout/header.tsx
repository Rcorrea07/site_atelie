"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = ["Home", "Sobre", "Catálogo", "Pagamento", "Envio", "Contato"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="flex size-10 items-center justify-center rounded-full bg-white/82 text-stone-700 shadow-sm shadow-rose-100/40 ring-1 ring-rose-100/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-rose-50 active:translate-y-0 active:scale-[0.97] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
          >
            <div className="flex flex-col justify-between w-5 h-3.5 transform transition-transform duration-300">
              <span className={`w-full h-0.5 bg-stone-700 rounded-full transition-transform duration-300 ease-out origin-center ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`w-full h-0.5 bg-stone-700 rounded-full transition-all duration-200 ease-out ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`w-full h-0.5 bg-stone-700 rounded-full transition-transform duration-300 ease-out origin-center ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`absolute inset-x-0 top-full z-40 px-4 py-2 transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden rounded-3xl border border-rose-100/70 bg-[#fcfaf7]/98 p-5 shadow-xl shadow-rose-100/60 backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {navItems.map((item, idx) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: isMenuOpen ? `${idx * 40}ms` : "0ms" }}
                className={`rounded-2xl px-4 py-3 text-base font-semibold text-stone-700 transition-all duration-300 ease-out hover:bg-rose-50 hover:text-[#b85f87] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
