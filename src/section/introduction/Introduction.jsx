import React from "react";
import style from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>
          Let’s Introduce
          <br />
          Ourself
        </p>
      </div>
      <div className={style.line}></div>
      <div className={style.lawyer}>
        <h3 className={style.lawyerHead}>Criminal Lawyer</h3>
        <p className={style.lawyerBody}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
