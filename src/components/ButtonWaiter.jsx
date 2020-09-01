import React from "react";
import BWaiter from "../img/icono mesera.png";
import { Link } from "react-router-dom";

const BtnWaiter = () => {
  const BtnW = () => {
    console.log("Hola soy el botón de mesera");
  };

  return (
    <div>
      <Link to="/Menu">
      <button onClick={BtnW}>
        <img src={BWaiter} alt="Mesera" />
      </button>
      </Link>
    </div>
  );
};

export default BtnWaiter;
