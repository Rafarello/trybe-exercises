const fetch = require("node-fetch");
function fetchURL() {
    return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
      response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
        .then((response) => console.log(response))
    );
  }
  fetchURL()
  module.exports = { fetchURL };