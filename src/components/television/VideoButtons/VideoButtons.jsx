"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import css from "./VideoButtons.module.css";

const VideoButtons = () => {
  const videoRef = useRef(null);
  const SpainTV =
    "https://canadaremar2.todostreaming.es/live/solidariatv-webhd.m3u8";
  const ArgentinaTV =
    "https://canadaremar2.todostreaming.es/live/argentina-web.m3u8";
  const [urlTv, setUrlTv] = useState(SpainTV);

  useEffect(() => {
    const hls = new Hls();
    const video = videoRef.current;

    if (Hls.isSupported() && video) {
      hls.loadSource(urlTv);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Some browsers (like Safari) can play M3U8 natively
      video.src = urlTv;
      video.addEventListener("loadedmetadata", function () {
        video.play();
      });
    }
  }, [urlTv]);

  const handleSpainTV = () => {
    setUrlTv(SpainTV);
  };

  const handleArgentinaTV = () => {
    setUrlTv(ArgentinaTV);
  };

  return (
    <div className={css.tv}>
      <div className={css.buttonsContainer}>
        <button
          type="button"
          aria-label="Abrir televisión en vivo de Solidaria TV España"
          className={urlTv === SpainTV ? css.activeButton : css.button}
          onClick={handleSpainTV}
        >
          TV España
        </button>
        <button
          type="button"
          aria-label="Abrir televisión en vivo de Solidaria TV Argentina"
          className={urlTv === ArgentinaTV ? css.activeButton : css.button}
          onClick={handleArgentinaTV}
        >
          TV Argentina
        </button>
      </div>
      <div className={css.videoContainer}>
        <video controls autoPlay muted className={css.video} ref={videoRef}>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoButtons;
