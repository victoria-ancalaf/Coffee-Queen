import React from "react";
import Bkitchen from "../img/cocina.png";
import { Link } from "react-router-dom";

const BtnKitchen = () => {
  const BtnK = () => {
    console.log("Hola soy el botón de cocina");
  };

  return (
    <Link to="/Chef">
    <div className="Chef">
        <button className="NoChef" onClick={BtnK}>
        <img src={Bkitchen} alt="Cocina" />
      </button>
    </div>
    </Link>
  );
};

export default BtnKitchen;
