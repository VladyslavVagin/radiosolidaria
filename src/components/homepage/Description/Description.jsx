import React from "react";
import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={css.container}>
      <div className={css.desc}>
        <h2 className={css.titleRadio}>¿Qué es <span>Radio Solidaria</span>?</h2>
        <p className={css.text}>
          <strong>Radio Solidaria</strong>, de la familia Solidaria Media, una radio Limpia y
          diferente con programación de calidad. Solidaridad, Cultura, valores y
          principios cristianos, cine, noticias, deportes y más en radio
          solidaria. si la <strong>escuchas te enriqueces.</strong>
        </p>
      </div>
      <div className={css.desc}>
        <h2 className={css.titleTV}>¿Qué es <span>Solidaria TV</span>?</h2>
        <p className={css.text}>
          <strong>Solidaria TV</strong> es un canal de televisión limpio y diferente. Limpio
          porque somos transparentes en nuestra programación con el propósito de
          aportar ideas y enseñanzas positivas y bíblicas <strong>para todas las edades.</strong>
          &nbsp;Somos diferentes porque en vez de recibir, queremos dar, somos un
          canal sin fines de lucro con medios de ayudar a familias con problemas
          tanto físicos como espirituales.
        </p>
      </div>
    </div>
  );
};

export default Description;
