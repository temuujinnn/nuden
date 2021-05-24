import React, { useState } from "react";
import css from "./style.module.css";
import Back from "../../images/elec.png";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../../component/button";
const eye = <AiFillEye />;
const hiden = <AiOutlineEyeInvisible />;
const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className={css.container}>
      <div className={css.layer}>
        <div className={css.img}>
          <img className={css.img} src={Back} alt="back" />
        </div>
        <form className={css.form}>
          <h3 className={css.text}>Нэвтрэх</h3>
          <div className={css.inputName}>
            <div className={css.logo}>
              <FaUserAlt />
            </div>
            <input
              className={css.inputN}
              type="text"
              placeholder="Нэвтрэх нэр"
            />
          </div>
          <div className={css.inputPass}>
            <div className={css.logo}>
              <AiFillLock />
            </div>
            <input
              className={css.inputP}
              type={passwordShown ? "text" : "password"}
              placeholder="Нууц үг оруулна уу..."
            />
            <div onClick={togglePasswordVisiblity} className={css.eyeIcon}>
              {passwordShown ? eye : hiden}
            </div>
          </div>
          <div className={css.button}>
            <Button text="Нэвтрэх" />
          </div>
          <div className={css.forget}>
            <p className={css.p}>Нууц үгээ мартсан? </p>
          </div>
          <div className={css.contact}>
            <button className={css.contactButton}>Холбоо барих</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
