import React from "react";
import css from "./style.module.css";
import Search from "../../component/search/index";
import Button from "../../component/button";
import Table from "../../component/table";
import Sidebar from "../../component/sidebar";
const Admin = () => {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        <Sidebar />
      </div>
      <div className={css.layer}>
        <div className={css.title}>Хэрэглэгч</div>
        <div className={css.nav}>
          <div className={css.search}>
            <Search />
          </div>
          <div className={css.button}>
            <Button text="+Хэрэглэгч нэмэх" />
          </div>
        </div>
        <div className={css.table}>
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Admin;
