import React from "react";
import Image from "next/image";
import css from "./ImageHero.module.css";

const ImageHero = () => {
  return (
    <section>
      <div className={css.imageBox}>
        <Image src={'/images/logo/logo-radio-solidaria.webp'} alt="Logo de Radio Solidaria" width={248} height={200}/>
      </div>
    </section>
  );
};

export default ImageHero;
