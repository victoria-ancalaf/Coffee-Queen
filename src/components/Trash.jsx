/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import TrashCan from "../img/basura.png";

const Trash = (props) => {
  return (
    <button onClick={props.onClick} className="btn-transh">
      <img src={TrashCan} />
    </button>
  );
};

export default Trash;
