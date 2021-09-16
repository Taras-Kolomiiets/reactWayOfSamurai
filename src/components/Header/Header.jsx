import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
        alt="aaa"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="./login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
