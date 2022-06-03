import React from "react";
import { useEmail } from "../Context/Provider";

function Email() {
  const { emailInput, setEmailInput } = useEmail();
  return (
    <div>
      <h3>Email Input</h3>
      <input
        type="text" placeholder="Insira o nome"
        value={ emailInput }
        onChange={ (e) => setEmailInput(e.target.value) }
      />
    </div>
  );
}

export default Email;