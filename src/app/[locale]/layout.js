"use client";

import { Suspense } from "react";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/TranslationsProvider";
import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const metadata = {
  title: "Solidaria Media",
  description:
    "Solidaria Media es una agencia de comunicación especializada en proyectos de impacto social y medioambiental. Ayudamos a organizaciones y empresas a contar sus historias de manera efectiva y a conectar con sus audiencias de forma auténtica y sostenible.",
};

const i18nNamespaces = ["home"];

export default function RootLayout({ children, params: { locale } }) {
  const { _, resources } = initTranslations(locale, i18nNamespaces);

  return (
    <html lang="es">
      <body>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Header />
          <main>
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </main>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
