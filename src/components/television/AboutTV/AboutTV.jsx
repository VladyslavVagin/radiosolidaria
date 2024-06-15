"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { cardsInfo } from "@/app/lib/cardsInfo";
import Frequencias from "./Frequencias/Frequencias";
import NuestrosValores from "./NuestrasValores/NuestrosValores";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
import PedidosOracion from "./PedidosOracion/PedidosOracion";
import CardInfo from "./CardInfo/CardInfo";
import css from "./AboutTV.module.css";

const AboutTV = () => {
  const [contentName, setContentName] = useState(null);
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      {isTablet && (<h2 className={css.title}>Sobre <span>Solidaria</span> TV</h2>)}
      <ul className={css.list}>
        {cardsInfo?.map((card) => (
          <li key={card.id} className={css.listItem}>
            <CardInfo
              card={card}
              setContentName={setContentName}
              contentName={contentName}
            />
          </li>
        ))}
      </ul>
      {contentName === "¿Quienes somos?" ? (
        <QuienesSomos />
      ) : contentName === "Frecuencias TV Argentina" ? (
        <Frequencias />
      ) : contentName === "Pedidos de Oración" ? (
        <PedidosOracion />
      ) : (
        contentName === "Nuestros valores" && <NuestrosValores />
      )}
    </div>
  );
};

export default AboutTV;
