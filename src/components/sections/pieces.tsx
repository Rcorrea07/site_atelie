import StackSpread from "@/components/ui/stack-spread";
import { pieces } from "@/data/pieces";

/* 02 — As peças se espalham conforme a pessoa rola.
   É o único momento de movimento longo do site; por isso vem sozinho,
   sem texto concorrente em volta. */
export function Pieces() {
  return (
    <section id="pecas">
      <StackSpread
        cards={pieces}
        title={"Feito à mão,\numa peça por vez."}
        subtitle="Bolsas, estojos e necessaires que saem da mesa de corte prontos para o dia a dia."
        bgColor="#f4efe9"
        textColor="#1f1b18"
        cardRadius={3}
        scrollHintLabel="Role"
      />
    </section>
  );
}
