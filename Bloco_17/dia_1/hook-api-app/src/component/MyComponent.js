import React, { Component } from 'react';
import MyContext from '../context/MyContext';

export default class GreatGrandfather extends Component {
  constructor() {
    super();
    this.state = {
      money: 1000000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState((prevState) => ({ money: prevState.money - 1000 }))
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }

    return (
      <MyContext.Provider value={contextValue}>
        <Grandmother />
      </MyContext.Provider>
    );
  }
}

function Grandmother() {
  return (
    <Father  />
  );
}

function Father() {
  return (
    <Daughter />
  );
}

function Daughter() {
  return (
    <MyContext.Consumer >
      {(value) => (
        <div>
          <span>
            {`Tenho uma herança de R$ ${value.money} que recebi do meu bisavô`}
          </span>
          <button onClick={() => value.spendMoney()}>PEDIR UM IFOOD</button>
        </div>
      )}
    </MyContext.Consumer>
  );
}