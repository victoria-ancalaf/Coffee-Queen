import React from 'react';
import logo1 from './img/logo1.png';
import './App.css';
import boton from './components/Buttons.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }
  

  clickMe() {
    console.log("click me");
  }

  render() {
    return ( < div className = "App" >
<div className = "App" >
  <img src={logo1} className="LogoCoffee" alt="Coffee Queen" />
 </div> <button className = "App"onClick = {this.clickMe}> INICIO </button> </div>
    );
  }
}


