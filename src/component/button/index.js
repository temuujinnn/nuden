import React from "react";
import css from "./style.module.css";
const Button = (props) => {
  return <div className={css.button}>{props.text}</div>;
};
export default Button;
