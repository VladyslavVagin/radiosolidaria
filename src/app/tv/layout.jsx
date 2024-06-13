"use client";

import { Suspense } from "react";
import ImageHero from "@/components/television/ImageHero/ImageHero";
import VideoButtons from "@/components/television/VideoButtons/VideoButtons";
import AboutTV from "@/components/television/AboutTV/AboutTV";
import LastVideos from "@/components/television/LastVideos/LastVideos";

const layout = ({ children }) => {
  return (
    <>
      <ImageHero />
      <VideoButtons />
      <LastVideos />
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      <AboutTV />
    </>
  );
};

export default layout;
