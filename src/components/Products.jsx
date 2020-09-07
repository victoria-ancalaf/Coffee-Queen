import React, { useState } from "react";
import data from "../data/menu.json";
import Drinks from "../components/Drinks";
import CakeShop from "../components/CakeShop";
import "../styles/BtnMenu.css";

const Products = () => {
  const MenuBebidas = data.filter((items) => items.type === "bebida");
  

  const MenuPasteleria = data.filter((items) => items.type === "pastelería");

/*  const caffee = data.options;
  const Caffee = caffee.filter((items) => items.options === "cl01");
  console.log(Caffee); */

  const [options, setOptions] = useState(MenuBebidas);
  const [order, setOrder] = useState ([]);



  const cakeClick = () => {
    console.log("Hola, traigo ricos Pasteles");
    setOptions(MenuPasteleria);
  };

  const drinkClick = (Bebestibles) => {
    console.log("Hola, vendo muchos tipos de café");
    setOrder([...order, {nombre: Bebestibles.name, precio: Bebestibles.value} ]);
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
          <button name={item.name} value={item.price} onClick={(e) => drinkClick(e.target)} className="optionsButtons" key={index}>
            {item.name} <br></br>${item.price}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
