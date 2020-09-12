import React from "react";
import BtnWaiter from "../components/ButtonWaiter.jsx";
import BtnKitchen from "../components/ButtonKitchen.jsx";
import "../styles/SelectionApp.css";

function Enter() {
  return (
    <div className="ContainterSelection">
      <BtnWaiter />
      <BtnKitchen />
    </div>
  );
}

export default Enter;
