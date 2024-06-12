import ImageHero from "@/components/television/ImageHero/ImageHero";
import VideoButtons from "@/components/television/VideoButtons/VideoButtons";
import css from './page.module.css'

const page = () => {
  return (
    <section>
      <div className={css.container}>
        <ImageHero />
        <VideoButtons />
      </div>
    </section>
  );
};

export default page;
