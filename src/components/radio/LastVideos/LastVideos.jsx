import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import css from "./LastVideos.module.css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css";

const LastVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/youtube/radioSolidaria/videos.json")
      .then((response) => response.json())
      .then((data) => setVideos(data.videos));
  }, []);

  return (
    <div className={css.videosContainer}>
      <h2 className={css.title}>
        Las últimas videos de <span>Youtube</span>
      </h2>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={false}
        modules={[Scrollbar, Navigation]}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {videos.map((video) => (
          <SwiperSlide key={video._id}>
            <div>
              <iframe
                width="300"
                height="200"
                src={video.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href={"https://www.youtube.com/channel/UC7746OINwIay25Xz1ByfYZw"}
        target="_blank"
        aria-label="Ir a Youtube canal de Radio Solidaria"
        className={css.link}
      >
        Ver <span>TODOS</span> los videos
      </Link>
    </div>
  );
};

export default LastVideos;
