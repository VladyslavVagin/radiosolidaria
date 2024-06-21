import ListSocials from "@/components/aboutPage/ListSocials/ListSocials";
import NuestrasYoutube from "@/components/aboutPage/NuestrasYoutube/NuestrasYoutube";
import SitiosWeb from "@/components/aboutPage/SitiosWeb/SitiosWeb";
import css from "./page.module.css";

export const metadata = {
  title: "Solidaria RTV - Nuestras afiliaciones, sitios web y redes sociales",
  description:
    "Solidaria RTV es una radio y televisión cristiana en línea que transmite música, programas y mensajes cristianos las 24 horas del día.",
};

const page = () => {
  return (
    <section>
      <div className={css.container}>
        <h1 className={css.title}>Medios de Comunicación Bíblicas</h1>
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
