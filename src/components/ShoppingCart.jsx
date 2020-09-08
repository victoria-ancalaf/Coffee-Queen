import React from "react";
import "../styles/cart.css";
/* import Form from "../components/Form"; */
import ButtonsCancel from "../components/ButtonsCancel";
import ButtonSend from "../components/ButtonSend";
import ButtonsOrder from "../components/ButtonsOrder";
import Trash from "../components/Trash"

const ShoppingCart = ({order}) => {
  return (
    <div className="containerCart">
      <div className="Tables">
      {/*   <Form /> */}
      </div>
      <div className="StylesTitle">
        <p>PRODUCTOS</p>
        <p>CANT</p>
        <p>PRECIO</p>
      </div>
      <div className="ListProducts">
        {order.map((item, index) => 
        <div className="Hola" key={index}>
        <div className="products">{item.name}</div>
        <div className="quantity"></div>
        <div className="price"> ${item.price}</div>
        <div><Trash key={'hola' + index} /></div>
         </div>
        )}
      </div>
      <div className="StylesTitle">
        <p>TOTAL</p>
        <p>00</p>
        <p>00</p>
      </div>
      <div className="ContainerBtnCart">
        <div className="BtnTwo">
          <ButtonsCancel />
          <ButtonsOrder />
        </div>
        <div className="BtnThree">
          <ButtonSend />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
