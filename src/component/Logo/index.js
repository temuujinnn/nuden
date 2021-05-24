import React from "react";
import css from "./style.module.css";
import { AiOutlinePoweroff } from "react-icons/ai";
const Logo = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <AiOutlinePoweroff />
        VERTUOSO
      </div>
    </div>
  );
};
export default Logo;
