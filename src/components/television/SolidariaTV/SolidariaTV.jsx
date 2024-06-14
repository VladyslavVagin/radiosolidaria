"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import css from "./SolidariaTV.module.css";

const CharlasBiblicas = () => {
  const pathname = usePathname();
  const [videosURL, setVideoURL] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (pathname === "/tv/solidaria-tv") {
      setVideoURL("/youtube/solidariaTV/SolidariaTV/videos.json");
    } else if (pathname === "/tv/kids") {
      setVideoURL("/youtube/solidariaTV/Kids/videos.json");
    } else if (pathname === "/tv/miguel-diez") {
      setVideoURL("/youtube/solidariaTV/MiguelDiez/videos.json");
    } else if (pathname === "/tv/ramon-ubillos") {
      setVideoURL("/youtube/solidariaTV/RamoonUbillos/videos.json");
    }
  }, [pathname]);

  useEffect(() => {
    if (videosURL === null) {
      return;
    } else {
      fetch(videosURL)
        .then((response) => response.json())
        .then((data) => setVideos(data.videos));
    }
  }, [videosURL]);

  return (
    <div className={css.videosContainer}>
      {videos.map((video) => (
        <div key={video._id}>
          <div>
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className={css.videoContainer}
            ></iframe>
          </div>
        </div>
      ))}
      <Link
        href={pathname === '/tv/kids' ? 'https://www.youtube.com/@SolidariaKids/videos' : "https://www.youtube.com/channel/UC7746OINwIay25Xz1ByfYZw"}
        target="_blank"
        aria-label="Ir a Youtube canal de Radio Solidaria"
        className={css.link}
      >
        Ver <span>TODOS</span> los videos
      </Link>
    </div>
  );
};

export default CharlasBiblicas;
