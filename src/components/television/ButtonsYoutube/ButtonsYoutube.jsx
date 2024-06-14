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
  const is375 = useMediaQuery({ minWidth: 375 });

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
                width={is375 ? 160 : 132}
                height={100}
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
