import React from "react";
import icon from "../assets/icons/Vector.svg";
import style from "./Logo.module.css";

function Logo() {
  return (
    <div className={style.container}>
      <img src={icon} alt="" className={style.image} />
      <h1 className={style.text}>IGSTUDIO</h1>
    </div>
  );
}

export default Logo;
