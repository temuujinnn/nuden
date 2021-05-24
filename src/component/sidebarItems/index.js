import React from "react";
import css from "./style.module.css";

const Items = (props) => {
  return (
    <div className={css.container}>
      <div className={css.icon}>{props.logo}</div>
      <div className={css.text}>{props.text}</div>
    </div>
  );
};
export default Items;
