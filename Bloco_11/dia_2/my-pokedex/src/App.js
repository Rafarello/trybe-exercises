import React from 'react';
import './App.css';
import pokemons from './data';
import PokedexList from './pokedex-list';

class App extends React.Component {
  render() {
    return (
      <main className='main-container'>
        <div>
        <h1>Minha Pokedex</h1>
        </div>
        <div className='pokemon-container'>
             { pokemons.map((pokemon) => <PokedexList pokemonObject={pokemon} />) }
        </div>
      </main>
    )
  };
}

export default App;
