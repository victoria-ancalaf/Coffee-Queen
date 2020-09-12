import React from "react";
import Header from "../components/Header";
import "../styles/kitchen.css";
import { firebase } from "../firebase";

function Food({ cooking, handleSetCooking }) {
  const setCooking = handleSetCooking;

  React.useEffect(() => {
    const readOrders = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("orders").orderBy("date", "asc").get();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="chefContainer">
      <div className="headerChef">
        <Header tipo={"cocina"}/>
      </div>
      <div className="CardContainer">
        {cooking.map((item, index) => (
          <div key={index} className="CardOrder">
            <div className="CardLeft">
              <div className="TableClient"></div>
              <div className="TitleProduct">PRODUCTOS</div>
              <div className="listadeproductos"><ol>{item.product.map((food, ch) => (<li key={index + food + ch}>{food}</li>))}</ol></div>
            </div>
            <div className="CardRight">
              <div className="chefLe">{item.date}</div>
              <div className="btnChef">
                <button className="terminarChef">TERMINADO</button>
              </div>
              <div className="chefLe">{item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
