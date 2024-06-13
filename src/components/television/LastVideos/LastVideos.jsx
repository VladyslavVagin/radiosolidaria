import React from "react";
import ButtonsYoutube from "../ButtonsYoutube/ButtonsYoutube";
import css from "./LastVideos.module.css";

const LastVideos = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>
        Las últimas videos de <span>Youtube</span> canal
      </h2>
      <ButtonsYoutube />
    </div>
  );
};

export default LastVideos;
