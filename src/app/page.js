import React from "react";
import Hero from "@/components/homepage/hero/Hero";
import LinksPages from "@/components/homepage/LinksPages/LinksPages";
import Description from "@/components/homepage/Description/Description";
import css from "./page.module.css";

export const metadata = {
  title: "Solidaria RTV - Radio y Televisión cristiana en línea",
  description:
    "Solidaria RTV es una radio y televisión cristiana en línea que transmite música, programas y mensajes cristianos las 24 horas del día.",
  icon: "/favicon.ico",
};

const page = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <Hero />
        <div className={css.content}>
          <LinksPages />
          <Description />
        </div>
      </div>
    </section>
  );
};

export default page;
