import React, { useState } from "react";
import data from "../data/menu.json";
import Drinks from "../components/Drinks";
import CakeShop from "../components/CakeShop";
import "../styles/BtnMenu.css";

const Products = () => {
const MenuBebidas = data.filter((items) => items.type === "bebida");

const MenuPasteleria = data.filter((items) => items.type === "pastelería");

const [options, setOptions] = useState(MenuBebidas);

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
      <CakeShop onClick={() => cakeClick()}style={{background:'#BF7111'}} />
      </div>
      <div className="MenuButtons">
      {options.map((item, index) => (
        <button className="optionsButtons" key={index}>{item.name}</button>
      ))}
      </div>
    </div>
  );
};

export default Products;
