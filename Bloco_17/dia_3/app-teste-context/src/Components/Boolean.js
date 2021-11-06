import React from "react";
import { useBoolean } from "../Context/Provider";

function Boolean() {
  const { booleanState, toggleBoolean } = useBoolean();
  return (
    <div>
      <h3>Boolean Input</h3>
      <button
        type="text" placeholder="Insira o nome"
        onClick={ () => toggleBoolean() }
      >
        {booleanState ? 'True' : 'False'}
      </button>
    </div>
  );
}

export default Boolean;