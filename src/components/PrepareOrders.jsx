import React from "react";
import "../styles/kitchen.css";
import { firebase } from "../firebase";

const db = firebase.firestore();
console.log(db)

const PrepareOrders = () => {


 

  return (
    <div className="CardOrder">
      <div className="CardLeft">
        <div className="TableClient"> 
        </div>
        <div className="TitleProduct">PRODUCTOS</div>
        {/* <div className="DIVPRUEBA">
          {cooking.map((item) => (
            <div key={item.id}> {item.product}</div>
          ))}
        </div> */}
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
