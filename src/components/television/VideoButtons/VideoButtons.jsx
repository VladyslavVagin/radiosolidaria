"use client";

import { useState } from "react";
import css from "./VideoButtons.module.css";

const VideoButtons = () => {
  const SpainTV = 'https://www.solidariatv.com/0c32e290-4325-4b89-afd7-87ea114e7012';
  const ArgentinaTV = "https://www.solidariatv.com/en-vivo-argentina/";
  const [videoUrl, setVideoUrl] = useState(SpainTV);

  const handleSpainTV = () => {
    setVideoUrl(SpainTV);
  };

  const handleArgentinaTV = () => {
    setVideoUrl(ArgentinaTV);
  };

  return (
    <>
      <div className={css.buttonsContainer}>
        <button
          type="button"
          aria-label="Abrir televisión en vivo de Solidaria TV España"
          className={css.button}
          onClick={handleSpainTV}
        >
          Solidaria TV España
        </button>
        <button
          type="button"
          aria-label="Abrir televisión en vivo de Solidaria TV Argentina"
          className={css.button}
          onClick={handleArgentinaTV}
        >
          Solidaria TV Argentina
        </button>
      </div>
      {videoUrl && (
        <video controls autoPlay muted>
          <source src={videoUrl} />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default VideoButtons;
