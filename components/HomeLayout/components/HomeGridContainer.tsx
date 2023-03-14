import React from "react";
import style from "../homeLayout.module.css";

type Props = {};

const HomeGridContainer = ({ children }) => {
  return <div className={style.homeGrid_container}>{children}</div>;
};

export default HomeGridContainer;
