import React from "react";
import "../styles/Header.css";
import Cup from "../img/logo2.png";
import BWaiter from "../img/mesera.png";
import BCocina from "../img/cocina.png"
import Clock from "./Clock";
import { Link } from "react-router-dom";

const Header = (props) => {
  const esCocina = props.tipo
  return (
    <div className="HeaderQueen">
      <Link to="/Selection">
        <div className="CupLogo">
          <img src={Cup} alt="Coffe Queen" />
        </div>
      </Link>
      <div className="WaiterLogo">
        {esCocina && esCocina === "cocina" ? (
         <img src={BCocina} alt="Cocina" />
        ) : (<img src={BWaiter} alt="Mesero" />)}
        
        <Clock />
      </div>
    </div>
  );
};

export default Header;
