import { AvatarIcon, HamburgerIcon } from "@/components/icon";
import style from "../homeLayout.module.css";
import profileImage from "./assets/Sin-titulo-1.jpg";
import React from "react";

type Props = {};

const MenuNavbar = (props: Props) => {
  return (
    <div className={style.menuNavbar_container}>
      <HamburgerIcon />
      <AvatarIcon alt="Avatar" image={profileImage} />
    </div>
  );
};

export default MenuNavbar;
