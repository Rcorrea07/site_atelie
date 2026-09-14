/* Cartas do StackSpread: começam empilhadas no centro e se espalham conforme
   a pessoa rola a página.

   Como ler cada carta:
   - stackOffset / stackRotate : posição e ângulo enquanto está no monte
   - target                    : posição final no desktop (x/y em vw/vh, w/h idem)
   - targetSm                  : posição final em telas de toque (coluna dupla)
   - z                         : ordem de pintura, maior fica na frente

   A ordem do array é a ordem do monte, do fundo (z 2) para a frente (z 9).
   Para trocar uma foto, basta mudar `item.src` e `item.alt`. */

import type { StackSpreadCard } from "@/components/ui/stack-spread";

export const pieces: StackSpreadCard[] = [
  // topo-esquerda — a marca
  {
    item: { src: "/img/necessaire-transparente.webp", alt: "Máquina de costura do ateliê" },
    stackOffset: { x: -8, y: -10 },
    stackRotate: -18,
    target: { x: -20, y: -34, rotate: 0, scale: 0.75, w: 16, h: 24 },
    targetSm: { x: -22, y: -35 },
    z: 2,
  },
  // topo-direita — necessaires
  {
    item: { src: "/img/necessaire.webp", alt: "Necessaires matelassadas em azul" },
    stackOffset: { x: 14, y: -10 },
    stackRotate: 20,
    target: { x: 32, y: -30, rotate: 0, scale: 0.9, w: 18, h: 32 },
    targetSm: { x: 22, y: -35 },
    z: 3,
  },
  // meio-esquerda — estojo
  {
    item: { src: "/img/estojo.webp", alt: "Estojo com estampa de bonecas" },
    stackOffset: { x: -16, y: 0 },
    stackRotate: -4,
    target: { x: -36, y: -2, rotate: 0, scale: 0.9, w: 17, h: 30 },
    targetSm: { x: -22, y: -19 },
    z: 4,
  },
  // topo-centro — a peça principal
  {
    item: { src: "/img/conjunto-praia.webp", alt: "Bolsa em tecido cinza com alça estampada" },
    stackOffset: { x: 1, y: -10 },
    stackRotate: -2,
    target: { x: 6, y: -32, rotate: 0, scale: 0.85, w: 20, h: 34 },
    targetSm: { x: 22, y: -19 },
    z: 5,
  },
  // meio-direita — praia
  {
    item: { src: "/img/praia.webp", alt: "Bolsa de praia em tela amarela" },
    stackOffset: { x: 18, y: 1 },
    stackRotate: 6,
    target: { x: 37, y: 6, rotate: 0, scale: 0.85, w: 18, h: 32 },
    targetSm: { x: -22, y: 19 },
    z: 6,
  },
  // base-esquerda — mochila personalizada
  {
    item: { src: "/img/criativa.webp", alt: "Mochila estampada com alça personalizada" },
    stackOffset: { x: -6, y: 10 },
    stackRotate: 6,
    target: { x: -24, y: 34, rotate: 0, scale: 0.9, w: 18, h: 30 },
    targetSm: { x: 22, y: 19 },
    z: 7,
  },
  // base-centro — embalagem
  {
    item: { src: "/img/bolsa-vinho.webp", alt: "Etiqueta, adesivo e sacola do ateliê" },
    stackOffset: { x: 8, y: 7 },
    stackRotate: 3,
    target: { x: 2, y: 36, rotate: 0, scale: 0.8, w: 19, h: 28 },
    targetSm: { x: -22, y: 35 },
    z: 8,
  },
  // base-direita — a mesa de corte
  {
    item: { src: "/img/bolsa-rosa.webp", alt: "Mesa do ateliê com linhas, tesoura e tecidos" },
    stackOffset: { x: 20, y: 12 },
    stackRotate: -7,
    target: { x: 30, y: 34, rotate: 0, scale: 0.9, w: 22, h: 17 },
    targetSm: { x: 22, y: 35 },
    z: 9,
  },
];
