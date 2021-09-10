import './App.css';
import React from 'react'

class Form extends React.Component {
  constructor() {
    super();

    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChangeTextArea(event) {
    this.setState({
      estadoFavorito: event.target.value,
    }, () => console.log(this.state));
  }

  handleChangeSelect(event) {
    this.setState({
      genero: event.target.value
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <br />
        <form className="form">
          <label>
            <h1> Diga qual o seu Estado favorito! De React ou do Brasil, você decide!</h1>
            <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChangeTextArea} />
          </label>
          <h1>Qual sua idade?</h1>
          <input
            type="number"
            name="idade"
          />
          <h1>Qual seu Gênero?</h1>
          <select value={this.state.value} onChange={this.handleChangeSelect}>
            <option value="nulo" defaultValue></option>
            <option value="masc">Masculino</option>
            <option value="femi">Feminino</option>
          </select>
          <h1>Vai comparecer?</h1>
          <input
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div >
    );
  };
}

export default Form;
