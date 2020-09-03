import React from "react";
import Header from "../components/Header";
import data from "../data/menu.json";
import Drinks from "../components/Drinks";
import CakeShop from "../components/CakeShop";
import "../styles/Menu.css"

console.log(data);

function MenuOptions() {
  return (
    <div className="ContainerMenu">
      <div className="ContainerHeader">
      <Header />
      </div>
      <div className="ContainerMenuBottom"> 
        <div className="ContainerButtons">
          <Drinks />
          <CakeShop />
          </div>
          <div className="ContainerOrder">
          </div>
      </div>
    </div>
  );
}

export default MenuOptions;
