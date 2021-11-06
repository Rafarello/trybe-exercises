import React, { useContext } from 'react';
import AppContext from './context/context';

const App = () => {
  const { stateA, setStateA, stateB, setStateB } = useContext(AppContext);
  console.log(AppContext)
  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("Botão A")}>Botão A</button>
      <button onClick={() => setStateB("Botão B")}>Botão B</button>
    </div>
  );
};

export default App;
