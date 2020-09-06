import React, { useRef } from "react";
// import "./App.css";

const Form = ({ setParentState, parentState }) => {
  const selector = useRef(null);
  const [state, setState] = React.useState({
    waiterName: "",
    table: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setParentState([...parentState, state]);
    setState({
      waiterName: "",
      table: "",
    });
    selector.current.selectedIndex = 0;
  };
  return (
    <FormView
      handleChange={handleChange}
      submit={submit}
      waiterName={state.waiterName}
      selector={selector}
    />
  );
};

/* const DataView = ({ parentState }) => {
  return (
    <ol>
      {Array.isArray(parentState) &&
        parentState.map(({ waiterName, table }) => (
          <li>
            <h1>
              {waiterName} {table}
            </h1>
          </li>
        ))}
    </ol>
  );
};  */

const FormView = ({ handleChange, submit, waiterName, table, selector }) => (
  <div className="form">
    <form onSubmit={submit}>
      <input
        value={waiterName}
        type="text"
        waiterName="Nombre Mesero"
        onChange={handleChange}
      />
      <select ref={selector} name="N° de Mesa" id="" onChange={handleChange}>
        <option value="">Mesa</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </form>
  </div>
);

/* function App() {
  const [parentState, setParentState] = useState([]);
  return (
    <>
      <Form setParentState={setParentState} parentState={parentState} />
      <div>
        <br />
        <DataView parentState={parentState} />
      </div>
    </>
  );
} */

export default Form;
