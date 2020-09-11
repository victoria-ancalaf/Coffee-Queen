import React from "react";
import Header from "../components/Header";
import "../styles/kitchen.css";
import { firebase } from "../firebase";

function Food({cooking, handleSetCooking}) {
const setCooking = handleSetCooking

  React.useEffect(() => {
    const readOrders = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("orders").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setCooking(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    readOrders();
  }, []);
  
  return (
    <div className="chefContainer">
      <div className="headerChef">
        <Header />
      </div>
      <div className="CardContainer">
      <div className="CardOrder">
      <div className="CardLeft">
        <div className="TableClient"> 
        </div>
        <div className="TitleProduct">PRODUCTOS</div>
        <div className="DIVPRUEBA">
          {cooking.map((item, index) => (
            <ol key={index}>
            <li className="OutList" >{item.product}</li>
            </ol>
          ))}
        </div>
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
      </div>
    </div>
  );
}

export default Food;
