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

/* Na mesma ordem em que as seções aparecem em app/page.tsx. */
export const nav = [
  { label: "Coleções", href: "#colecao" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Peças", href: "#pecas" },
  { label: "Encomenda", href: "#encomenda" },
  { label: "Contato", href: "#contato" },
];
