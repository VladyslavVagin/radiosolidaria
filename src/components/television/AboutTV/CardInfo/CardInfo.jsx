import React from "react";
import Image from "next/image";
import css from "./CardInfo.module.css";

const CardInfo = ({ card }) => {
  return (
    <div className={css.cardContainer}>
      <h2 className={css.cardTitle}>{card.title}</h2>
      <div className={css.imageWrapper}>
        <Image
          src={card.image}
          alt={card.title}
          width={132}
          height={100}
          className={css.imageCard}
        />
      </div>
      <div className={css.overlay}>
        <p>{card.info}</p>
      </div>
    </div>
  );
};

export default CardInfo;
