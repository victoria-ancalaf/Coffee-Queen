import React, { useState } from "react";
import data from "../data/menu.json";
import Drinks from "../components/Drinks";
import CakeShop from "../components/CakeShop";
import "../styles/BtnMenu.css";

const Products = () => {
  const MenuBebidas = data.filter((items) => items.type === "bebida");
  const MenuPasteleria = data.filter((items) => items.type === "pastelería");

//Estado del pedido
  const [options, setOptions] = useState(MenuBebidas);
  const [order, setOrder] = useState ([]);
  // const [quantity, setquantity] = useState(1);

  const addCart = (menu) => {
    setOrder([...order, {name: menu.name, price: menu.value, id: menu.sku} ]);
  }

  const cakeClick = () => {
    console.log("Hola, traigo ricos Pasteles");
    setOptions(MenuPasteleria);
  };

  const drinkClick = () => {
    console.log("Hola, vendo muchos tipos de café");
    setOptions(MenuBebidas);
  };
  

  return (
    <div>
      <div className="Cookies">
        <Drinks onClick={() => drinkClick()} />
        <CakeShop
          onClick={() => cakeClick()}
          style={{ background: "#BF7111" }}
        />
      </div>
      <div className="MenuButtons">
        {options.map((item, index) => (
          <button name={item.name} value={item.price} onClick={(e) => addCart(e.target)} className="optionsButtons" key={index}>
            {item.name} <br></br>${item.price}
          </button>
        ))}
    </div>
    <div className="DIVPRUEBA">
        {order.map(item => (
          <div key={item.sku}> {item.name} {item.price}</div>
            ))}
        </div>
    </div>
  );
};

export default Products;
