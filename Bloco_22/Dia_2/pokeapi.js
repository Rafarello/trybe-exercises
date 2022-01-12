const axios = require('axios').default;

const pokemonService = {
  get(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        console.log(
        response.data.name,
        response.data.types);
        });
  }
}

pokemonService.get(59)