function concatName(frase) {
    // seu código aqui

    let ultimoNome = frase[frase.length-1];
    let primeiroNome = frase[0];
    return (`${ultimoNome}, ${primeiroNome}`)

  }
  function concatName(frase) {
    // seu código aqui

    let ultimoNome = frase[frase.length-1];
    let primeiroNome = frase[0];
    let nomesConcatenados = ultimoNome + ", " + primeiroNome
    return nomesConcatenados
  }
console.log(concatName(['captain', 'my', 'captain']))