/* Slides da galeria imersiva (ParallaxStripSlider).
   Troque `src` por fotos novas conforme o ateliê fotografar as peças.

   As fotos são .webp (~100 KB) em vez dos .png originais (~2,2 MB): o slider
   clona a mesma imagem em 10 tiras, então o peso do arquivo pesa dez vezes. */

import type { Slide } from "@/components/ui/parallax-strip-slider";

export const collection: Slide[] = [
  {
    src: "/img/bolsa-vinho.webp",
    title: "Bolsas",
    chapter: "Coleção 01 — Alça de mão",
  },
  {
    src: "/img/bolsa-rosa.webp",
    title: "Viagem",
    chapter: "Coleção 02 — Fim de semana",
  },
  {
    src: "/img/necessaire-transparente.webp",
    title: "Necessaires",
    chapter: "Coleção 03 — Transparente",
  },
  {
    src: "/img/conjunto-praia.webp",
    title: "Praia",
    chapter: "Coleção 04 — Conjunto",
  },
];
