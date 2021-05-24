import React from "react";
import Logo from "../Logo";
import Profile from "../profile";
import Items from "../sidebarItems";
import css from "./style.module.css";
import { RiDashboardFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import Logout from "../logout";
let logo = <RiDashboardFill />;
let user = <FaUserAlt />;
let tech = <VscServerProcess />;
let pay = <MdPayment />;
let auto = <GiAutoRepair />;
let bell = <AiOutlineBell />;
let sett = <AiOutlineSetting />;
const Sidebar = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.profile}>
          <Profile />
        </div>
      </div>
      <div className={css.em}>
        <div className={css.items}>
          <Items logo={logo} text="Дашбоард" />
          <Items logo={user} text="Хэрэглэгч" />
          <Items logo={tech} text="Төхөөрөмж" />
          <Items logo={pay} text="Төлбөр" />
          <Items logo={auto} text="Автомат" />
          <Items logo={bell} text="Мэдэгдэл" />
          <Items logo={sett} text="Тохиргоо" />
        </div>
      </div>
      <div className={css.logout}>
        <Logout />
      </div>
    </div>
  );
};
export default Sidebar;
