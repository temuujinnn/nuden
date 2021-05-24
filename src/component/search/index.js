import React from "react";
import css from "./style.module.css";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className={css.container}>
      <div className={css.icon}>
        <BiSearch />
      </div>
      <input
        className={css.input}
        type="search"
        placeholder="Хайх зүйлээ энд бичнэ үү..."
      />
      <button className={css.button}>Хайх</button>
    </div>
  );
};
export default Search;
