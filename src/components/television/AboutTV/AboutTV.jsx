"use client";

import React from "react";
import { cardsInfo } from "@/app/lib/cardsInfo";
import CardInfo from "./CardInfo/CardInfo";
import css from './AboutTV.module.css'

const AboutTV = () => {
  console.log(cardsInfo);

  return (
    <div>
      <ul className={css.list}>
        {cardsInfo?.map((card) => (
          <li key={card.id} className={css.listItem}>
            <CardInfo card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTV;
