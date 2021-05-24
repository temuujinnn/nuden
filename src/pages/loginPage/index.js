import React, { useState } from "react";
import css from "./style.module.css";
import Back from "../../images/elec.png";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../../component/button";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
const eye = <AiFillEye />;
const hiden = <AiOutlineEyeInvisible />;
const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("form", values);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Е-шуудан оруулна уу"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Нууц үг оруулна уу"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const history = useHistory();
  const handleClick = () => {
    history.push("/admin");
  };
  return (
    <div className={css.container}>
      <div className={css.layer}>
        <div className={css.img}>
          <img className={css.img} src={Back} alt="back" />
        </div>
        <form onSubmit={formik.handleSubmit} className={css.form}>
          <h3 className={css.text}>Нэвтрэх</h3>
          <div className={css.inputName}>
            <div className={css.logo}>
              <FaUserAlt />
            </div>
            <input
              className={css.inputN}
              onChange={formik.handleChange}
              values={formik.values.name}
              type="text"
              placeholder="Нэвтрэх нэр"
              name="email"
              id="email"
            />
          </div>
          <div className={css.alert}>{formik.errors.email}</div>
          <div className={css.inputPass}>
            <div className={css.logo}>
              <AiFillLock />
            </div>
            <input
              className={css.inputP}
              id="password"
              onChange={formik.handleChange}
              values={formik.values.password}
              type={passwordShown ? "text" : "password"}
              placeholder="Нууц үг оруулна уу..."
            />
            <div onClick={togglePasswordVisiblity} className={css.eyeIcon}>
              {passwordShown ? eye : hiden}
            </div>
          </div>
          <div className={css.alert}>{formik.errors.password}</div>
          <div className={css.button}>
            <Button onClick={handleClick} text="Нэвтрэх" />
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
