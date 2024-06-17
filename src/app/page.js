import React from "react";
import Hero from "@/components/homepage/hero/Hero";
import LinksPages from "@/components/homepage/LinksPages/LinksPages";
import Description from "@/components/homepage/Description/Description";
import css from "./page.module.css";

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
