/* Dados do negócio. Ficam fora do design para poderem ser
   atualizados sem mexer no layout. */

export const site = {
  name: "Ateliê Sy Corrêa",
  shortName: "Sy Corrêa",
  tagline: "Costura criativa",
  whatsapp: "https://wa.me/5535999006252",
  whatsappLabel: "(35) 99900-6252",
  instagram: null as string | null,
  facebook: null as string | null,
};

export const nav = [
  { label: "Ateliê", href: "#atelie" },
  { label: "Peças", href: "#pecas" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Encomenda", href: "#encomenda" },
  { label: "Contato", href: "#contato" },
];
