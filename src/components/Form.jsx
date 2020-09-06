import React, { Fragment, useState } from 'react';
import { useRef} from 'react';

const Form = () => {
    const selector = useRef(null);
    const [data, setData] = useState({
        waiterName: "",
        tables: "",
    });
    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };
    const sendData = (event) => {
        event.preventDefault();

    };
    return (
    <Fragment>
      <div className="item1">
        <form className="row mt-3" onSubmit={sendData}>
          <div className="col">
            <select ref={selector} name="waiterName" id="" onChange={handleInputChange}>
              <option value="">Mesero</option>
              <option value="Ignacio">Ignacio</option>
              <option value="Fernanda">Fernanda</option>
              </select>
          </div>
          <div className="col">
            <select ref={selector} name="tables" id="" onChange={handleInputChange}>
              <option value="">N° de Mesa</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="col">
              {/* <button className="btn btn-dark" type="submit">Registrar</button> */}
            </div>
          </div>
        </form>
        {/* <Router >
          <div className="container mt-2">
            <div className="btn-group">
            <Link to="/Drinks" className="btn btn-dark">Café</Link>
            <Link to="/CakeShop" className="btn btn-dark">Pastelería</Link>
            </div>
          <Switch>
            <Route path="/Drinks" exact>
              <Drinks name={data.waiterName} tables={data.tables} />
            </Route>
            <Route path="/CakeShop" exact>
            <CakeShop name={data.waiterName} tables={data.tables} />
            </Route>
            </Switch>
            </div>
            </Router>*/}
          </div>
    </Fragment>
    )
}
export default Form;