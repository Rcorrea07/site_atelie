import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Pieces } from "@/components/sections/pieces";
import { Catalog } from "@/components/sections/catalog";
import { Collection } from "@/components/sections/collection";
import { Order } from "@/components/sections/order";
import { Contact } from "@/components/sections/contact";

/* Ordem da página: apresenta (hero), explica quem faz (01), mostra as peças
   em movimento (02), lista com preço (03), galeria imersiva (04), como
   encomendar (05) e convida à conversa (06).

   Nada de `overflow-x-hidden` aqui: isso cria um contexto de scroll e quebra
   todo `position: sticky` abaixo — o StackSpread e as colunas fixas param de
   grudar. O corte horizontal fica no html, com `overflow-x: clip`. */
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Pieces />
      <Catalog />
      <Collection />
      <Order />
      <Contact />
    </main>
  );
}
