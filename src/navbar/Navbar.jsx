import React from "react";
import Logo from "../assets/icons/logo.png";
import Options from "./options/Options";
import Button from "./button/Button";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <Logo />
      <Options />
      <Button content={"Contact Now"} />
    </div>
  );
}

export default Navbar;
