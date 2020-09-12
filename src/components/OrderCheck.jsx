import React from "react";
import "../styles/orderCheck.css";
import checkWaiter from "../img/check.png";

const OrderCheck = () => {
  return (
    <div className="containerOrderCheck">
      <div className="tableWaiter"></div>
      <div className="EndOrder"> PRODUCTOS</div>
      <div className="OrderCheck"></div>
      <div>
        <button className="button-check" type="submit">
          <img src={checkWaiter} alt="Check" />
        </button>
      </div>
    </div>
  );
};

export default OrderCheck;
