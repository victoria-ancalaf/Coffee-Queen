import React from "react";
import DataView from "../components/DataView";
import "../styles/kitchen.css";

const PrepareOrders = () => {
  return (
    <div className="CardOrder">
      <div className="CardLeft">
        <div className="TableClient">
          <DataView />
        </div>
        <div className="TitleProduct">PRODUCTOS</div>
      </div>
      <div className="CardRight">
        <div className="chefLe">Hora de ingreso: 20:59</div>
        <div className="btnChef">
          <button className="prepararChef">PREPARAR</button>
          <button className="terminarChef">TERMINADO</button>
        </div>
        <div className="chefLe">Estado: En preparación</div>
      </div>
    </div>
  );
};

export default PrepareOrders;
