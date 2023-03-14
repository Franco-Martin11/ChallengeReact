import React from "react";
import style from "./homeLayout.module.css";
import {
  CategoryFilter,
  HeadingText,
  MenuNavbar,
  SearchBar,
} from "./components";

const HomeLayout = ({ children }) => {
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
