import React from "react";
import css from "./style.module.css";
import Img from "../../images/iu.jpg";
const Profile = () => {
  return (
    <div className={css.container}>
      <div className={css.image}></div>
      <img src={Img} className={css.img} alt="temk" />
      <div className={css.name}>
        <p>Төгөлдөр</p>
      </div>
    </div>
  );
};
export default Profile;
