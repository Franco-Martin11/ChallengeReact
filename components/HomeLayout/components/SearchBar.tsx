import { SearchIcon } from "@/components/icon";
import style from "../homeLayout.module.css";
import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const handleSearch = (ev: React.FormEvent<HTMLFormElement>) =>
    ev.preventDefault();
  return (
    <form
      className={style.form_container}
      onSubmit={(ev) => handleSearch(ev)}
      action=""
    >
      <button type="submit">
        <SearchIcon />
      </button>
      <input placeholder="Search burger, pizza, drink or etc..." type="text" />
    </form>
  );
};

export default SearchBar;
