import React from "react";
import Image from "next/image";
import css from "./ImageHero.module.css";

const ImageHero = () => {
  return (
    <section>
      <div className={css.imageBox}>
        <Image
          src={"/images/logo/tv/logo-tv-notext.webp"}
          alt="Logo de Radio Solidaria"
          width={150}
          height={68}
        />
      </div>
    </section>
  );
};

export default ImageHero;
