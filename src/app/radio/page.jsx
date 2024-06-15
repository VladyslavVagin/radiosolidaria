"use client";

import ImageHero from "@/components/radio/ImageHero/ImageHero";
import AudioRadio from "@/components/radio/Audio/AudioRadio";
import Descripcion from "@/components/radio/Descripcion/Descripcion";
import LastVideos from "@/components/radio/LastVideos/LastVideos";
import DesktopImg from "@/components/radio/DesktopImg/DesktopImg";
import css from "./page.module.css";

const page = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.heroContainer}>
          <ImageHero />
          <AudioRadio url="http://master.shoutcast.com:8000/radiosolidaria" />
          <DesktopImg />
        </div>
        <div className={css.contentContainer}>
          <LastVideos />
          <Descripcion />
        </div>
      </div>
    </section>
  );
};

export default page;
