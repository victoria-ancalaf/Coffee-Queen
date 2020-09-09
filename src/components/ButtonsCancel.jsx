import React from "react";
import "../styles/cart.css";

const ButtonsCancel = (props) => {
  return (
    <button onClick={props.onClick} className="BtnCancel">
      CANCELAR PEDIDO
    </button>
  );
};

export default ButtonsCancel;
