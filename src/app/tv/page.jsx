import ImageHero from "@/components/television/ImageHero/ImageHero";
import VideoButtons from "@/components/television/VideoButtons/VideoButtons";
import AboutTV from "@/components/television/AboutTV/AboutTV";
import LastVideos from "@/components/television/LastVideos/LastVideos";
import css from "./page.module.css";

export const metadata = {
  title: "Solidaria TV - Televisión cristiana en línea",
  description:
    "Solidaria TV es una televisión cristian en línea que transmite programas y mensajes cristianos las 24 horas del día.",
};

const page = () => {
  return (
    <section>
      <ImageHero />
      <div className={css.container}>
        <div className={css.heroContainer}>
          <VideoButtons />
        </div>
        <LastVideos />
        <AboutTV />
      </div>
    </section>
  );
};

export default page;
