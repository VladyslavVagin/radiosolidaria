import ListSocials from "@/components/aboutPage/ListSocials/ListSocials";
import NuestrasYoutube from "@/components/aboutPage/NuestrasYoutube/NuestrasYoutube";
import SitiosWeb from "@/components/aboutPage/SitiosWeb/SitiosWeb";
import css from "./page.module.css";

const page = () => {
  return (
    <section>
      <div className={css.container}>
        <h1 className={css.title}>Medios de <span>Comunicación</span> Bíblicas</h1>
        <div>
          <ListSocials />
          <NuestrasYoutube />
        </div>
        <SitiosWeb />
      </div>
    </section>
  );
};

export default page;
