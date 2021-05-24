import React from "react";
import css from "./style.module.css";
import { AiOutlinePoweroff } from "react-icons/ai";
const Logout = () => {
  return (
    <div className={css.container}>
      <AiOutlinePoweroff />
      <p className={css.para}>Гарах</p>
    </div>
  );
};
export default Logout;
