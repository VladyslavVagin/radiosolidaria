"use client";

import { Suspense } from "react";
import ImageHero from "@/components/television/ImageHero/ImageHero";
import VideoButtons from "@/components/television/VideoButtons/VideoButtons";
import AboutTV from "@/components/television/AboutTV/AboutTV";
import LastVideos from "@/components/television/LastVideos/LastVideos";
import css from "./page.module.css";

const layout = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.heroContainer}>
        <ImageHero />
        <VideoButtons />
      </div>
      <LastVideos />
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      <AboutTV />
    </div>
  );
};

export default layout;
