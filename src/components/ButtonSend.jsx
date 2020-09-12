import React from "react";
import "../styles/cart.css";

const ButtonSend = (props) => {
  return (
    <button onClick={props.onClick} className="BtnSend">
      ENVIAR PEDIDO
    </button>
  );
};

export default ButtonSend;
