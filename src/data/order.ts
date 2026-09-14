/* Como a encomenda funciona. Reúne o que antes estava espalhado em duas
   seções (pagamento e envio) numa única leitura de cima para baixo. */

export type OrderStep = {
  number: string;
  title: string;
  text: string;
};

export const orderSteps: OrderStep[] = [
  {
    number: "01",
    title: "Conversa",
    text: "Você manda pelo WhatsApp a peça que gostou. Combinamos tecido, tamanho, personalização e o prazo de produção antes de qualquer pagamento.",
  },
  {
    number: "02",
    title: "Sinal",
    text: "Um sinal de 50% no Pix reserva o seu lugar na fila de produção. Também atendo por débito, crédito em até 12x no link de pagamento e Pix parcelado.",
  },
  {
    number: "03",
    title: "Produção",
    text: "A peça é cortada e costurada à mão, uma por vez, dentro do prazo combinado. O saldo restante fica para quando ela estiver pronta.",
  },
  {
    number: "04",
    title: "Envio",
    text: "Envio para todo o Brasil pelos Correios, PAC ou Sedex, com o valor calculado antes de fechar. Assim que for postada, você recebe o código de rastreio.",
  },
];
