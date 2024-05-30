import React from "react";
import style from "./Button.module.css";

function Button({ content }) {
  return (
    <div className={style.conatiner}>
      <button className={style.button}>{content}</button>
    </div>
  );
}

export default Button;
