import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Pieces } from "@/components/sections/pieces";
import { Catalog } from "@/components/sections/catalog";
import { Collection } from "@/components/sections/collection";
import { Order } from "@/components/sections/order";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Collection /> 
      <Catalog />
      <Pieces />
      <Order />
      <Contact />
    </main>
  );
}
