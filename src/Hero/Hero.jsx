import React from "react";
import image from "../assets/Image1.png";
import style from "./Hero.module.css";
import { ReactComponent as Mail } from "../assets/mail-142.svg";

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1 className={style.heading}>
          You don't have to
          <br />
          <b className={style.span}>Fight them Alone.</b>
        </h1>
        <p className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          obcaecati ullam soluta quas molestiae ex sit beatae a quibusdam.
          Reiciendis ratione at unde qui suscipit iste labore, molestiae rem
          autem.
        </p>
        <div className={style.emailBox}>
          <Mail className={style.mailImage} />
          <input
            type="email"
            className={style.input}
            placeholder="Enter your email address"
          />
          <button className={style.button}>Let's Talk</button>
        </div>
      </div>
      <div className={style.imageBackground}>
        <img src={image} className={style.image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
