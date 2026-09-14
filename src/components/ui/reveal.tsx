"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Substitui o AOS. Uma única entrada, discreta: 12px de subida e fade,
   uma vez só.

   Movimento reduzido não precisa de tratamento aqui: a regra
   `prefers-reduced-motion` em globals.css zera a duração da transição, então
   o elemento simplesmente aparece. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sem IntersectionObserver: revela direto no nó. Escrever no DOM evita
    // um setState síncrono no corpo do efeito, que dispara render em cascata.
    if (typeof window.IntersectionObserver !== "function") {
      el.style.opacity = "1";
      el.style.translate = "0px";
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      /* `translate`, não `transform`: no Tailwind v4 `translate-y-3` escreve a
         propriedade `translate`, que não seria animada por `transform`. */
      className={`transition-[opacity,translate] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
