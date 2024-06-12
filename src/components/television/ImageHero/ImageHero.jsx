import React from "react";
import Image from "next/image";
import css from "./ImageHero.module.css";

const ImageHero = () => {
  return (
    <section>
      <div className={css.imageBox}>
        <Image
          src={"/images/logo/logo-solidaria-tv.webp"}
          alt="Logo de Radio Solidaria"
          width={380}
          height={248}
        />
      </div>
    </section>
  );
};

export default ImageHero;
