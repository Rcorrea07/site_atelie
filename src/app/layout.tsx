import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Display editorial — usado só em títulos e no slider de coleções. */
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

/* Corpo de texto — humanista, boa acentuação em pt-BR. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

/* Rótulos, numeração de seção e preços. */
const monoLabel = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ateliê Sy Corrêa — Costura criativa feita à mão",
  description:
    "Bolsas, estojos e necessaires feitos à mão sob encomenda, peça por peça, no Ateliê Sy Corrêa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${instrument.variable} ${jakarta.variable} ${monoLabel.variable}`}
    >
      <body className="bg-atelier-bg font-sans antialiased">{children}</body>
    </html>
  );
}
