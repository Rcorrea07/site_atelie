import type { Metadata } from "next";
import { Roboto, Caprasimo, Dancing_Script } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/providers/aos-init";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto"
});

const caprasimo = Caprasimo({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-caprasimo"
});

const dancing = Dancing_Script({ 
  subsets: ["latin"], 
  variable: "--font-dancing"
});

export const metadata: Metadata = {
  title: "Ateliê Sy Corrêa",
  description: "Crie com Paixão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${roboto.variable} ${caprasimo.variable} ${dancing.variable}`}>
      <body className="antialiased bg-atelier-bg">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}