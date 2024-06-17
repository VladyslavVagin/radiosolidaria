"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Image from "next/image";
import css from "./LinksPages.module.css";

const LinksPages = () => {
  const is767 = useMediaQuery({ maxWidth: 767.98 });
  const is768 = useMediaQuery({ minWidth: 768 });
  const is1200 = useMediaQuery({ minWidth: 1200 });
  const is1199 = useMediaQuery({ maxWidth: 1199.98 });

  return (
    <div className={css.container}>
      <div className={css.linkItem}>
        <h2 className={css.titleRadio}>Escuchar la radio</h2>
        <div className={css.linkBoxRadio}>
          <Link href={"/radio"} aria-label="Ir a la página Radio Solidaria">
            <Image
              src={"/images/logo/radio/radio.webp"}
              alt="Logo de Radio Solidaria"
              width={is768 && !is767 ? 220 : 100}
              height={is768 && !is767 ? 186 : 86}
            />
          </Link>
        </div>
      </div>
      <div className={css.linkItem}>
        <h2 className={css.titleTV}>Ver la televisión</h2>
        <div className={css.linkBoxTV}>
          <Link href={"/tv"} aria-label="Ir a la página Solidaria TV">
            <Image
              src={"/images/logo/tv/logo-tv.webp"}
              alt="Logo de Radio Solidaria"
              width={is768 && !is767 ? 200 : (is1200 && !is1199 ? 170 : 92)}
              height={is768 && !is767 ? 188 : (is1200 && !is1199 ? 158 : 88)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinksPages;
