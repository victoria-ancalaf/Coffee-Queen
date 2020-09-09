import React from "react";
import "../styles/cart.css";
import Form from "../components/Form";
import ButtonsCancel from "../components/ButtonsCancel";
import ButtonSend from "../components/ButtonSend";
import ButtonsOrder from "../components/ButtonsOrder";
import Trash from "../components/Trash";
import { firebase } from "../firebase";

const db = firebase.firestore();
console.log(db);

const ShoppingCart = ({ order, handleDelete }) => {
  //Elimar items
  const deleteCart = (id) => {
    console.log(id);
    const filterProduct = order.filter((item) => item.id !== id);
    handleDelete(filterProduct);
    console.log(filterProduct);
  };

  //Sumar el total de los items
  const calcular = order.map((item) => Math.floor(item.price));
  console.log(calcular);
  const Add = calcular.reduce((a, b) => a + b, 0);
  console.log(Add);

  //Cancelar pedido
  const deleteOrder = (id) => {
    const filterCart = order.filter((item) => item.id === id);
    handleDelete(filterCart);
  };

  //Subir pedido a Firebase
  const SendOrder = (item) => {
    db.collection("orders")
      .add({
        product: item.name,
        price: item.price,
        id: item.sku,
        total: Add,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="containerCart">
      <div className="Tables">
        <Form />
      </div>
      <div className="StylesTitle">
        <p>PRODUCTOS</p>
        <p>PRECIO</p>
        <p>ELIMINAR</p>
      </div>
      <div className="ListProducts">
        {order.map((item, index) => (
          <div className="Hola" key={index}>
            <div className="cartProducts">{item.name}</div>
            {/*             <div className="cartProducts">{item.quantity}</div> */}
            <div className="cartProducts">${item.price}</div>
            <Trash onClick={() => deleteCart(item.id)} key={"hola" + index} />
          </div>
        ))}
      </div>
      <div className="StylesTitle">
        <p>TOTAL</p>
        {/*         <p>00</p> */}
        <p>${Add}</p>
      </div>
      <div className="ContainerBtnCart">
        <div className="BtnTwo">
          <ButtonsCancel onClick={() => deleteOrder()} />
          <ButtonsOrder />
        </div>
        <div className="BtnThree">
          <ButtonSend onClick={() => SendOrder()} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
