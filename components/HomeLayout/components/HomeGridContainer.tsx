import React, { ReactNode } from "react";
import style from "../homeLayout.module.css";

type Props = { children: ReactNode };

const HomeGridContainer = ({ children }: Props) => {
  return <div className={style.homeGrid_container}>{children}</div>;
};

export default HomeGridContainer;
