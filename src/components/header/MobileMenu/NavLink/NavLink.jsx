import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import css from "./NavLink.module.css";

const NavLink = ({link}) => {
  const pathName = usePathname();

  return (
    <Link
      href={link?.path}
      className={`${css.link} ${pathName === link?.path && css.active}`}
    >
      <Icon name={link.title} className={css.icon} />
    </Link>
  );
};

export default NavLink;
