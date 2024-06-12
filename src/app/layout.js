"use client";

import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const metadata = {
  title: "Solidaria Media",
  description:
    "Solidaria Media es una agencia de comunicación especializada en proyectos de impacto social y medioambiental. Ayudamos a organizaciones y empresas a contar sus historias de manera efectiva y a conectar con sus audiencias de forma auténtica y sostenible.",
};


export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body>
          <Header />
          <main>
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </main>
          <Footer />
      </body>
    </html>
  );
}
