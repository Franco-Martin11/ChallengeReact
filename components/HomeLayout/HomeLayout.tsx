import React, { ReactNode } from "react";
import style from "./homeLayout.module.css";
import {
  CategoryFilter,
  HeadingText,
  MenuNavbar,
  SearchBar,
} from "./components";
type Props = { children: ReactNode };
const HomeLayout = ({ children }:Props) => {
  return (
    <div className={style.homeLayout_container}>
      <MenuNavbar />
      <HeadingText />
      <div className={style.input_container}>
        <SearchBar />
        <CategoryFilter />
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;
