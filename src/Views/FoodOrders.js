import React from "react";
import Header from "../components/Header";
import OrderCheck from "../components/OrderCheck";
import "../styles/orderCheck.css";

function Waiter() {
  return (
    <div className="containerCheck">
      <div className="headerCheck">
        <Header />
      </div>
      <div className="checkBottom">
        <OrderCheck />
      </div>
    </div>
  );
}

export default Waiter;
