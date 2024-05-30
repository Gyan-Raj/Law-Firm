import React from "react";
import style from "./Options.module.css";

function Options() {
  return (
    <div className={style.container}>
      <button className={style.button}>Home</button>
      <button className={style.button}>Attorneys</button>
      <button className={style.button}>Practice Areas</button>
      <button className={style.button}>About Us</button>
    </div>
  );
}

export default Options;
