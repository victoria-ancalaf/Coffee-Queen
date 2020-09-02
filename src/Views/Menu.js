import React from "react";
import Header from "../components/Header";
import data from "../data/menu.json";

console.log(data)

function MenuOptions() {
  return (
    <div className="ContainterMenu">
      <Header />
    </div>
  );
}

export default MenuOptions;
