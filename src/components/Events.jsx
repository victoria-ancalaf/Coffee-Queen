import React from "react";
import { Link } from "react-router-dom";
import "../styles/EnterApp.css";

const Events = () => {
  const eventClick = () => {
    console.log("Hola soy un botón");
  };

  return (
    <div className="BtnEnter">
        <Link to="/Selection">
          <button className="NoBtn" onClick={eventClick}>INICIO</button>
        </Link>
    </div>
  );
};

export default Events;
