'use client';

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import css from "./CardInfo.module.css";

const CardInfo = ({ card, setContentName, contentName }) => {
  const is375 = useMediaQuery({ minWidth: 375 });

  const handleClick = () => {
    if (contentName !== card.title) {
      setContentName(card.title);
    } else {
      setContentName(null);
    }
  };

  return (
    <button
      className={
        contentName === card.title ? css.activeCard : css.cardContainer
      }
      onClick={handleClick}
    >
      <h2 className={css.cardTitle}>{card.title}</h2>
      <div className={css.imageWrapper}>
        <Image
          src={card.image}
          alt={card.title}
          width={is375 ? 160 : 132}
          height={100}
          className={css.imageCard}
        />
      </div>
      <div className={css.overlay}>
        <p>{card.info}</p>
      </div>
    </button>
  );
};

export default CardInfo;
