# Site Ateliê Sy Corrêa

Landing page do Ateliê Sy Corrêa, marca de costura criativa com bolsas, estojos, necessaires e peças artesanais sob encomenda.

## Sobre

Página única, em ritmo editorial: apresenta o ateliê, mostra as peças, lista o catálogo com preço, explica como funciona a encomenda e leva a conversa para o WhatsApp.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP (galeria de coleções)
- Motion (espalhamento das peças)

## Como rodar

```bash
npm install
```

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

## Estrutura

```text
src/app         layout, tokens de cor e tipografia (globals.css)
src/data        conteúdo: produtos, coleções, peças, passos da encomenda
src/components/layout     cabeçalho
src/components/sections   uma seção por arquivo, na ordem da página
src/components/ui         peças reutilizáveis
public/img      fotos
```

## Seções

| # | Seção | Arquivo |
|---|---|---|
| — | Hero | `sections/hero.tsx` |
| 01 | O ateliê | `sections/about.tsx` |
| 02 | Peças (espalhamento) | `sections/pieces.tsx` |
| 03 | Catálogo | `sections/catalog.tsx` |
| 04 | Coleções (galeria) | `sections/collection.tsx` |
| 05 | Encomenda | `sections/order.tsx` |
| 06 | Contato + rodapé | `sections/contact.tsx` |

## Design

Tokens de cor e tipografia ficam em `src/app/globals.css`, no bloco `@theme`.
Duas classes utilitárias carregam a identidade:

- `label` — rótulo em mono, caixa alta, usado em numeração de seção, legendas e preços. Não define cor: quem usa escolhe, para servir em fundo claro e escuro.
- `display` — títulos em Instrument Serif, com tracking negativo.

Tipografia: Instrument Serif (títulos), Plus Jakarta Sans (texto), JetBrains Mono (rótulos).

## Conteúdo

Texto, preços e fotos ficam em `src/data`, fora do layout:

- `site.ts` — nome, WhatsApp, itens do menu
- `products.ts` — catálogo (nome, preço, foto)
- `collection.ts` — slides da galeria
- `pieces.ts` — cartas do espalhamento
- `order.ts` — os quatro passos da encomenda

## Notas de implementação

- Não use `overflow-x: hidden` em `<main>` ou em qualquer ancestral das seções: isso cria um contexto de scroll e quebra todo `position: sticky` — o espalhamento das peças e as colunas fixas param de funcionar. O corte lateral fica em `html { overflow-x: clip }`.
- Os dois componentes de galeria trocam para o layout compacto em `(pointer: coarse), (max-width: 767px)`. A versão original olhava só o ponteiro, o que quebrava em janela de desktop estreita.
