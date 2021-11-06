import React, {useContext, useState} from "react";
import { createContext } from 'react';

const NameContext = createContext();
const EmailContext = createContext();
const BooleanContext = createContext();

export function useName() {
  return useContext(NameContext);
}

export function useEmail() {
  return useContext(EmailContext);
}

export function useBoolean() {
  return useContext(BooleanContext);
}

function Provider({children}) {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [booleanState, setBooleanState] = useState(true);

  function toggleBoolean() {
    setBooleanState(previousBooleanState => !previousBooleanState)
  }

  return(
    <NameContext.Provider value={ { nameInput, setNameInput } }>
      <EmailContext.Provider value={ { emailInput, setEmailInput } }>
        <BooleanContext.Provider value={ { toggleBoolean, booleanState } }>
          {children}
        </BooleanContext.Provider>
      </EmailContext.Provider>
    </NameContext.Provider>
  )
}

export default Provider
