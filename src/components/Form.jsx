import React, { useRef } from "react";
import check from "../img/check.png";
import "../styles/cart.css"

const Form = ({ setParentState, parentState }) => {
  const selector = useRef(null);
  const [state, setState] = React.useState({
    cliente: "",
    mesa: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    console.log(value)
    console.log(name)
    setState({
      state,
      cliente: value,
    });
  };

  const submit = (evt) => {
    evt.preventDefault();
    setParentState([parentState, state]);
    setState({
      cliente: "",
      mesa: "",
    });
    selector.current.selectedIndex = 0;
  };


  return (
    <div >
    <form className="form" onSubmit={submit}>
      <input className="client"
        type="text"
        placeholder="Nombre del cliente"
        name="cliente"
        onChange={handleChange}
      />
      <select className="NumberTable" ref={selector} name="mesa" id="" onChange={handleChange}>
        <option value="0">N° de mesa</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div className="boton">
        <button className="button-form" type="submit"><img src={check} alt="Check" /></button>
      </div>
    </form>
  </div>
  );
};

export default Form;
