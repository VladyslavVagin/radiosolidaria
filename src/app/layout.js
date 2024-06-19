"use client";

import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/Loader/Loader";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="es-ES">
        <head>
          <title>Solidaria RTV - radio y televisión</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/favicon-solidaria-media/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/favicon-solidaria-media/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicon-solidaria-media/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicon-solidaria-media/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicon-solidaria-media/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicon-solidaria-media/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicon-solidaria-media/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicon-solidaria-media/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon-solidaria-media/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon-solidaria-media/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-solidaria-media/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-solidaria-media/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-solidaria-media/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon-solidaria-media/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/favicon-solidaria-media/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff"></meta>
        </head>
        <body>
          <Header />
          <main>
            <Suspense fallback={<Loader/>}>{children}</Suspense>
          </main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
