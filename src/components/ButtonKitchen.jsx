import React from "react";
import Bkitchen from "../img/iconos cocinapng.png";

const BtnKitchen = () => {
  const BtnK = () => {
    console.log("Hola soy el botón de cocina");
  };

  return (
    <div>
      <button onClick={BtnK}>
        <img src={Bkitchen} alt="Cocina" />
      </button>
    </div>
  );
};

export default BtnKitchen;
