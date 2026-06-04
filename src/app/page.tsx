import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Catalog } from "@/components/sections/catalog";
import { Payment } from "@/components/sections/payment";
import { Shipping } from "@/components/sections/shipping";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Catalog />
      <Payment />
      <Shipping />
      <Contact />
    </main>
  );
}