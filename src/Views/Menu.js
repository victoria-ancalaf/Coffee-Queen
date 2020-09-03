import React from "react";
import Header from "../components/Header";
import data from "../data/menu.json";
import Drinks from "../components/Drinks";
import CakeShop from "../components/CakeShop";

console.log(data);

function MenuOptions() {
  return (
    <div className="ContainterMenu">
      <Header />
      <Drinks />
      <CakeShop />
    </div>
  );
}

export default MenuOptions;
