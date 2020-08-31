import React from "react";

const Events = () => {
  const eventClick = () => {
    console.log("Hola soy un botón");
  };

  return (
    <div>
      <button onClick={eventClick}>Entrar</button>
    </div>
  );
};

export default Events;
