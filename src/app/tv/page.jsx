import ImageHero from "@/components/television/ImageHero/ImageHero";
import VideoButtons from "@/components/television/VideoButtons/VideoButtons";
import AboutTV from "@/components/television/AboutTV/AboutTV";
import LastVideos from "@/components/television/LastVideos/LastVideos";
import css from "./page.module.css";

const page = () => {
  return (
    <section>
      <div className={css.container}>
        <ImageHero />
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
