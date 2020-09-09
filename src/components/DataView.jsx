import React from "react";

const DataView = ({ parentState }) => {
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
};

export default DataView;
