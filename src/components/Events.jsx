import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const eventClick = () => {
    console.log("Hola soy un botón");
  };

  return (
    <div className="container">
      <div className="btn-group">
        <Link to="/Selection">
          <button onClick={eventClick}>Entrar</button>
        </Link>
      </div>
    </div>
  );
};

export default Events;
