"use client";

import React, { useState } from "react";
import Logo from "./Logo/Logo";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import css from "./Header.module.css";

const Header = () => {
  const [isShowMobile, setIsShowMobile] = useState(false);

  const handleClickShowMobile = () => {
    setIsShowMobile((prev) => !prev);
  };

  const operateScroll = () => {
    if (typeof window !== "undefined") {
      if (isShowMobile) {
        window.document.body.style.overflow = "hidden";
      } else {
        window.document.body.style.overflow = "auto";
      }
    }
  };
  operateScroll();

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo />
        <BurgerBtn onClick={handleClickShowMobile} isOpen={isShowMobile} />
      </div>
    </header>
  );
};

export default Header;
