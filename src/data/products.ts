/* Catálogo. Nomes e preços vieram da versão anterior do site — ficam aqui
   para poderem ser atualizados sem tocar no layout. */

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
    image: "/img/bolsa_1.jpg",
    alt: "Bolsa em tecido cinza com alça estampada em losangos",
  },
  {
    id: "estojos",
    name: "Estojos",
    detail: "Base reforçada, zíper macio, forro interno",
    price: "53,99",
    image: "/img/estojo.jpg",
    alt: "Estojo triangular com estampa de bonecas sobre fundo rosa",
  },
  {
    id: "praia",
    name: "Praia",
    detail: "Tela leve, alça tie-dye, fácil de lavar",
    price: "78,99",
    image: "/img/praia.jpg",
    alt: "Bolsa de praia em tela amarela com alça colorida",
  },
  {
    id: "costura",
    name: "Costura criativa",
    detail: "Estampa a escolher, acabamento personalizado",
    price: "45,99",
    image: "/img/criativa.jpg",
    alt: "Mochila estampada com capivaras e alça com nome bordado",
  },
];
