import React, {useState} from 'react'
import data from "../data/menu.json";
// import Drink from "./components/Drinks";

const Products = () => {
    
    const MenuBebidas  = data.filter(items =>
        items.type === "bebida");
    console.log(MenuBebidas)
    const Bebidas = MenuBebidas
console.log(Bebidas)
    const[options, setOptions] = useState([])
        // setOptions([...options, Bebidas])

    return (
        <div>
         {
             Bebidas.map( (item, index) => (
             <p key={index}>{item.name}</p>
             ))
         }
        </div>
    )
} 


 export default Products;
