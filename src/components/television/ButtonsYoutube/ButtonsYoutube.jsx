"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import { buttons } from "@/app/lib/buttonsYoutube";
import css from "./ButtonsYoutube.module.css";

const ButtonsYoutube = () => {
  const pathname = usePathname();
  const is767 = useMediaQuery({ maxWidth: 767.98 });
  const is768 = useMediaQuery({ minWidth: 768 });

  return (
    <div className={css.listLinks}>
      {buttons?.map((btn) => (
        <Link
          href={pathname === btn.path ? "/tv" : btn.path}
          key={btn.id}
          className={css.linkBtn}
        >
          <div
            className={
              pathname === btn.path
                ? css.cardContainerActive
                : css.cardContainer
            }
          >
            <h3 className={css.cardTitle}>{btn.name}</h3>
            <div className={css.imageWrapper}>
              <Image
                src={btn.img}
                alt={btn.name}
                width={is767 ? 160 : (is768 ? 350 : 132)}
                height={is768 ? 200 : 100}
                className={css.imageCard}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ButtonsYoutube;
