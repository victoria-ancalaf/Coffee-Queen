import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Menu.css";
import Products from "../components/Products";
import ShoppingCart from "../components/ShoppingCart";

function MenuOptions(props) {
  const {cooking, handleSetCooking} = props;
  const [order, setOrder] = useState([]);

  const handleSetOrder = (order) => {
    setOrder(order);
  };
  
  const handleDelete = (order) => {
    setOrder(order);
  };

  return (
    <div className="ContainerMenu">
      <div className="ContainerHeader">
        <Header />
      </div>
      <div className="ContainerMenuBottom">
        <div className="ContainerButtons">
          <Products order={order} handleSetOrder={handleSetOrder} />
        </div>
        <div className="ContainerOrder">
          <ShoppingCart
            order={order}
            handleSetOrder={handleSetOrder}
            handleDelete={handleDelete}
            cooking={cooking} handleSetCooking={handleSetCooking}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuOptions;
