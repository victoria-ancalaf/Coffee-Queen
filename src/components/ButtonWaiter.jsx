import React from "react";
import BWaiter from "../img/icono mesera.png";

const BtnWaiter = () => {
  const BtnW = () => {
    console.log("Hola soy el botón de mesera");
  };

  return (
    <div>
      <button onClick={BtnW}>
        <img src={BWaiter} alt="Mesera" />
      </button>
    </div>
  );
};

export default BtnWaiter;
