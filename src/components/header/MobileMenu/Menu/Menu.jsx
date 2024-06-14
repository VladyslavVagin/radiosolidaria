'use client';

import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "../NavLink/NavLink";
import css from "./Menu.module.css";

const links = [
  { title: "icon-home", path: "/" },
  { title: "icon-radio", path: "/radio" },
  { title: "icon-tv", path: "/tv" },
  { title: "icon-info", path: "/about" },
];

const Menu = ({setIsShowMobile}) => {
const pathname = usePathname();

  return (
    <ul className={css.menu}>
      {links.map((link, index) => (
        <li key={index} onClick={() => setIsShowMobile(false)} className={css.item}>
          <NavLink link={link}/> 
        </li>
      ))}
    </ul>
  );
};

export default Menu;
