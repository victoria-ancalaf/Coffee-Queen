import React from "react";

const Events = () => {
  const eventClick = () => {
    console.log("Hola soy un botón");
  };

  return (
    <div>
      <h2>Events</h2>
      <button onClick={eventClick}>Entrar</button>
    </div>
  );
};

export default Events;
