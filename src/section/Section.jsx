import React from "react";
import Introduction from "./introduction/Introduction";
import Choose from "./choose/Choose";
import style from "./Section.module.css";

function Section() {
  return (
    <div className={style.container}>
      <Introduction />
      <Choose />
    </div>
  );
}

export default Section;
