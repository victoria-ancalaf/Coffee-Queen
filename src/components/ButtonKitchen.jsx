import React from "react";
import Bkitchen from "../img/iconos cocinapng.png";
import { Link } from "react-router-dom";

const BtnKitchen = () => {
  const BtnK = () => {
    console.log("Hola soy el botón de cocina");
  };

  return (
    <div>
      <Link to="/Chef">
      <button onClick={BtnK}>
        <img src={Bkitchen} alt="Cocina" />
      </button>
       </Link>
    </div>
  );
};

export default BtnKitchen;
