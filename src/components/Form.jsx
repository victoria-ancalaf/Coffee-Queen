import React, { useRef } from "react";

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
      ...state,
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
    <div className="form">
    <form onSubmit={submit}>
      <input
        type="text"
        name="cliente"
        onChange={handleChange}
      />
      <select ref={selector} name="mesa" id="" onChange={handleChange}>
        <option value="0">N° de mesa</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div className="button-form">
        {/*      <button type="submit">Enviar Pedido</button> */}
      </div>
    </form>
  </div>
  );
};

export default Form;
