import React from "react";
import BWaiter from "../img/icono mesera.png";
import { Link } from "react-router-dom";

const BtnWaiter = () => {
  const BtnW = () => {
    console.log("Hola soy el botón de mesera");
  };

  return (
    <Link to="/Menu">
    <div className="Waiter">
      <button className="NoWaiter" onClick={BtnW}>
        <img src={BWaiter} alt="Mesera" />
      </button>
    </div>
    </Link>
  );
};

export default BtnWaiter;
