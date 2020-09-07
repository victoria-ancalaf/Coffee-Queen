import React from "react";
import Logo from "../components/CoffeeLogo.jsx";
import Events from "../components/Events.jsx";
import "../styles/EnterApp.css";


function Home() {
  return (
    <div className="containerHome">
      <Logo />
      <Events />
    </div>
  );
}

export default Home;
