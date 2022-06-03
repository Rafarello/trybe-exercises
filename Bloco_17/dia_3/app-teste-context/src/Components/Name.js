import React from "react";
import { useName } from "../Context/Provider";

function Name() {
  const { nameInput, setNameInput } = useName();
  return (
    <div>
      <h3>Name Input</h3>
      <input
        type="text" placeholder="Insira o nome"
        value={ nameInput }
        onChange={ (e) => setNameInput(e.target.value) }
      />
    </div>
  );
}

export default Name;
