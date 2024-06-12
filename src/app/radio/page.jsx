'use client';

import ImageHero from "@/components/radio/ImageHero/ImageHero";
import AudioRadio from "@/components/radio/Audio/AudioRadio";
import css from './page.module.css';
import Descripcion from "@/components/radio/Descripcion/Descripcion";

const page = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <ImageHero />
        <AudioRadio url="http://master.shoutcast.com:8000/radiosolidaria" />
        <Descripcion />
      </div>
    </section>
  );
};

export default page;
