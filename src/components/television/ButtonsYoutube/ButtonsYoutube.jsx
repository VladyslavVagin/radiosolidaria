import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttons } from "@/app/lib/buttonsYoutube";
import css from "./ButtonsYoutube.module.css";

const ButtonsYoutube = () => {
  return (
    <div className={css.listLinks}>
      {buttons?.map((btn) => (
        <Link href={btn.path} key={btn.id} className={css.linkBtn}>
          <div className={css.cardContainer}>
            <h3 className={css.cardTitle}>{btn.name}</h3>
            <div className={css.imageWrapper}>
              <Image src={btn.img} alt={btn.name} width={132} height={100} className={css.imageCard}/>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ButtonsYoutube;
