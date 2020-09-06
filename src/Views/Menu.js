import React from "react";
import Header from "../components/Header";
import "../styles/Menu.css";
import Products from "../components/Products";
import ShoppingCart from "../components/ShoppingCart";

function MenuOptions() {
  return (
    <div className="ContainerMenu">
      <div className="ContainerHeader">
        <Header />
      </div>
      <div className="ContainerMenuBottom">
        <div className="ContainerButtons">
          <Products />
        </div>
        <div className="ContainerOrder">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default MenuOptions;
