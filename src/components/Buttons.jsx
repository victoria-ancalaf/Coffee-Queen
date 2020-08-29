import React from 'react';




export default class boton extends React.Component {
    constructor() {
        super();
    }
    clickMe() {
        console.log("click me");
    }
    render() {
        return ( <div className = "App" >
            <button className = "App" onClick = {this.clickMe}> INICIO </button> 
            </div >
        );
    }
}