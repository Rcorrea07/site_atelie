/* Slides da galeria imersiva (ParallaxStripSlider).
   Troque `src` por fotos novas conforme o ateliê fotografar as peças. */

import type { Slide } from "@/components/ui/parallax-strip-slider";

export const collection: Slide[] = [
  {
    src: "/img/bolsa_1.jpg",
    title: "Bolsas",
    chapter: "Coleção 01 — Para levar o dia",
  },
  {
    src: "/img/necessaire.jpg",
    title: "Necessaires",
    chapter: "Coleção 02 — Matelassê",
  },
  {
    src: "/img/praia.jpg",
    title: "Praia",
    chapter: "Coleção 03 — Verão",
  },
  {
    src: "/img/estojo.jpg",
    title: "Estojos",
    chapter: "Coleção 04 — Pequenos",
  },
];
