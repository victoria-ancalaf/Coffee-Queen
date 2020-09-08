/* Esta pparte va en app.js

import React, { useRef } from "react";
import './App.css'; 

const Title = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}; */

/* Esta parte va en un componente 

 const Form = ({ setParentState, parentState }) => {
  const selector = useRef(null);
  const [state, setState] = React.useState({
    cliente:"",
    mesa:"",
  });

  const handleChange = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value,
    });
  }; */

  /*const submit = (evt) => {
    evt.preventDefault();
    setParentState([...parentState, state]);
    setState({
       cliente:"",
        mesa:"",
    });
    selector.current.selectedIndex = 0;
  };
  return (
    <FormView
      handleChange={handleChange}
      submit={submit}
      cliente={state.cliente}
      mesa={state.mesa}
      selector={selector}
    />
  );
};

/* const DataView = ({ parentState }) => {
  return (
    <ol>
      {Array.isArray(parentState) &&
        parentState.length >= 0 &&
        parentState.map(({ cliente, mesa }) => (
        <li>
            <p>
                <h1>
                    {cliente} {mesa}
                </h1>
            </p>
        </li>
        ))}
    </ol>
  );
}; */

/* const FormView = ({ handleChange, submit, cliente, selector}) => (
  <div className="form">
    <form onSubmit={submit}>
      <input value={cliente}
        type="text"
        name="Nombre Mesero"
        onChange={handleChange}/>
      <select ref={selector} name="mesa" id="" onChange={handleChange}>
        <option value="-">N° de mesa</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div className="button-form">
        <button type="submit">Enviar Pedido</button>
      </div>
    </form>
  </div>
);

export default Form; */

/* Esto va en otro archivo app 

function App() {
    const [parentState, setParentState] = useState([]);
    return (
      <>
        <div className="App">
          <Title title={"Simple React App V2"} />
        </div>
        <Form 
          setParentState={setParentState} 
          parentState={parentState} />
        <div>
          <br />
          <DataView parentState={parentState} />
        </div>
      </>
    );
  }
  
  export default App; */ 