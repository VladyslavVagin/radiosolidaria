import ImageHero from "@/components/radio/ImageHero/ImageHero";
import AudioRadio from "@/components/radio/Audio/AudioRadio";
import Descripcion from "@/components/radio/Descripcion/Descripcion";
import LastVideos from "@/components/radio/LastVideos/LastVideos";
import DesktopImg from "@/components/radio/DesktopImg/DesktopImg";
import css from "./page.module.css";

export const metadata = {
  title: "Radio Solidaria - Radio cristiana sensible al tiempo presente",
  description:
    "Radio Solidaria es una radio cristiana en línea que transmite música, programas y mensajes cristianos las 24 horas del día.",
};

const page = () => {
  return (
    <section className={css.section}>
      <ImageHero />
      <div className={css.container}>
        <div className={css.heroContainer}>
          <DesktopImg />
          <AudioRadio url="http://master.shoutcast.com:8000/radiosolidaria" />
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
