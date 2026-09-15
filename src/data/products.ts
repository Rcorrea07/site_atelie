/* Catálogo. Nomes e preços vieram da versão anterior do site — ficam aqui
   para poderem ser atualizados sem tocar no layout.

   As fotos são 16:9 (1672x941), por isso o catálogo usa duas colunas com
   imagem deitada: num recorte em retrato a peça ficaria cortada. */

export type Product = {
  id: string;
  name: string;
  /** linha curta de apoio, aparece abaixo do nome */
  detail: string;
  price: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    id: "bolsas",
    name: "Bolsas",
    detail: "Tecido estruturado, alça estampada, bolsos laterais",
    price: "98,74",
    image: "/img/bolsa_1.webp",
    alt: "Bolsa em tecido cinza com alças estampadas em losangos, sobre bancada de mármore com vista para o mar",
  },
  {
    id: "estojos",
    name: "Estojos",
    detail: "Base reforçada, zíper macio, forro interno",
    price: "53,99",
    image: "/img/estojo.webp",
    alt: "Estojo triangular com estampa de bonecas, base lilás e zíper azul",
  },
  {
    id: "praia",
    name: "Praia",
    detail: "Tela leve, alça tie-dye, fácil de lavar",
    price: "78,99",
    image: "/img/praia.webp",
    alt: "Bolsa de praia em tela amarela com alças em degradê colorido",
  },
  {
    id: "costura",
    name: "Costura criativa",
    detail: "Estampa a escolher, acabamento personalizado",
    price: "45,99",
    image: "/img/criativa.webp",
    alt: "Mochila com estampa de capivaras, alça marrom e chaveiros de pompom ao lado",
  },
];
