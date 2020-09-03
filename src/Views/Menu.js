import React from "react";
import Header from "../components/Header";
import Drinks from "../components/Drinks";
import CakeShop from "../components/CakeShop";
import "../styles/Menu.css"
import Products from "../components/Products";


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
          <Products />
          </div>
          <div className="ContainerOrder">
          </div>
      </div>
    </div>

  );
}

export default MenuOptions;
