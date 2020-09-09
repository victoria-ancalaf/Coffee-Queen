import React from "react";
import Header from "../components/Header";
import PrepareOrders from "../components/PrepareOrders";
import "../styles/kitchen.css";

function Food() {
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
