import React from "react";
import style from "./Choose.module.css";
import icon from "../../assets/Group-19.png";

function Choose() {
  return (
    <div className={style.container}>
      <h1 className={style.head}>Why Choose us?</h1>
      <div className={style.cardContainer}>
        <div className={style.leftCard}>
          <img src={icon} alt="" className={style.icon} />
          <p className={style.successRateTitle}>98% Success Rate</p>
          <div className={style.successRateDescription}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <button className={style.button}>Read More</button>
        </div>
        <div className={style.centerCard}>
          <img src={icon} alt="" className={style.icon} />
          <p className={style.successRateTitle}>100% Success Rate</p>
          <div className={style.successRateDescription}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <button className={style.button}>Read More</button>
        </div>
        <div className={style.rightCard}>
          <img src={icon} alt="" className={style.icon} />
          <p className={style.successRateTitle}>98% Success Rate</p>
          <div className={style.successRateDescription}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <button className={style.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Choose;
