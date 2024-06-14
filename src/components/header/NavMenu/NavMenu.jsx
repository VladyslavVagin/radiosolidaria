"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { links } from "@/app/lib/linksMenu";
import NavLink from "../MobileMenu/NavLink/NavLink";
import css from "./NavMenu.module.css";

const NavMenu = () => {
const pathname = usePathname();

  return (
    <div>
      <ul className={css.listMenu}>
        {links.map((link) => (
          <li key={link.id} className={pathname === link.path ? css.activeItem : css.listItem}>
            <NavLink link={link} />
            <p>{link.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
