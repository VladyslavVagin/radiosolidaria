import ListSocials from "@/components/aboutPage/ListSocials/ListSocials";
import css from "./page.module.css";

const page = () => {
  return (
    <section>
      <div className={css.container}>
        <h1>Medios de Comunicación Bíblicas</h1>
        <ListSocials />
      </div>
    </section>
  );
};

export default page;
