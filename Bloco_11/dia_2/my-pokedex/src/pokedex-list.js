import React from 'react';

class PokedexList extends React.Component {
  render() {
    const { pokemonObject: { 
      name,
      type,
      averageWeight: { value, measurementUnit}, 
      image } } = this.props;
    return (
      <div className='container'>
        <h2><em>{ name }</em></h2>
        <h3>Type: { type }</h3>
        <h3>Average Weight: { value } { measurementUnit }</h3>
        <img src={image} alt={`Imagem do {name}`}/>
      </div>
    );
  }
} 

export default PokedexList;