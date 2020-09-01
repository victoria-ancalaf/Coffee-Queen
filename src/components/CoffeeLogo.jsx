import React from "react";
import Img from "../img/logo1.png";
import "../styles/EnterApp.css";

function Logo() {
  return (
    <div className="LogoCoffe">
      <img src={Img} alt="Coffee Queen" />
    </div>
  );
}

export default Logo;
