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
      {cooking.map((item, index) => (
          <div key={index} className="CardOrder">
          <div className="CardLeft">
            <div className="TableClient"> 
            </div>
            <div className="TitleProduct">PRODUCTOS</div>
            <div className="listadeproductos">
            {item.product}
            </div>
          </div>
          
            
        </div>

          ))}
      </div>
      
    </div>
  );
}

export default Food;


