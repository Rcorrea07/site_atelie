"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do fundo enquanto o menu está aberto.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled || isMenuOpen
            ? "border-atelier-line bg-atelier-bg/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1300px] items-center justify-between gap-8 px-6 sm:px-10">
          <Link href="#home" aria-label={site.name} className="shrink-0">
            <Image
              src="/img/principal rosa sem fundo.webp"
              alt={site.name}
              width={435}
              height={145}
              priority
              className="h-auto w-[104px] object-contain sm:w-[118px]"
            />
          </Link>

          <nav aria-label="Navegação principal" className="hidden gap-9 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label text-atelier-muted transition-colors duration-300 hover:text-atelier-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="label hidden text-atelier-ink underline decoration-atelier-pink decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-atelier-pinkDeep sm:inline"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-8 items-center justify-center md:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 block h-px w-full bg-atelier-ink transition-transform duration-300 ease-out ${
                    isMenuOpen ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-atelier-ink transition-transform duration-300 ease-out ${
                    isMenuOpen ? "top-1/2 -rotate-45" : "top-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu em tela cheia: uma lista serifada, sem cartões nem sombras. */}
      <div
        className={`fixed inset-0 z-40 bg-atelier-bg transition-opacity duration-400 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Navegação principal"
          className="flex h-full flex-col justify-center gap-2 px-6 pb-24"
        >
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="display border-b border-atelier-line py-5 text-4xl text-atelier-ink"
            >
              <span className="label mr-4 align-middle text-atelier-pink">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="label mt-10 text-atelier-muted"
          >
            WhatsApp {site.whatsappLabel}
          </a>
        </nav>
      </div>
    </>
  );
}
