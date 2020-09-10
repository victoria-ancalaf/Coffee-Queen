import React from "react";
import Header from "../components/Header";
import PrepareOrders from "../components/PrepareOrders";
import "../styles/kitchen.css";
// import { firebase } from "../firebase";

function Food() {
  // const [cooking, setCooking] = React.useState([]);

  // React.useEffect(() => {
  //   const readOrders = async () => {
  //     try {
  //       const db = firebase.firestore();
  //       const data = await db.collection("orders").get();
  //       console.log(data.docs);
  //     } catch (error) {
  //       console.log(error);
  //       const arrayData = data.docs.map((doc) => ({}));
  //     }
  //   };
  //   readOrders();
  // }, []);

  return (
    <div className="chefContainer">
      <div className="headerChef">
        <Header />
      </div>
      <div className="CardContainer">
        <PrepareOrders />
      </div>
    </div>
  );
}

export default Food;
