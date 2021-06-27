/*

/*

 Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

n = 7

   *
  * *
 *   *
*******

*/

// Diferente do proposto, fiz um código que funcionasse com números pares também

let n = 8;

if (n % 2 !== 0) {
    let meioDaMatrix = (n + 1) / 2
    let primeiroAsterisco = meioDaMatrix;
    let ultimoAsterisco = meioDaMatrix;
    for (let index = 1; index <= meioDaMatrix; index += 1, ultimoAsterisco += 1, primeiroAsterisco -= 1) {
        let linha = '';
        for (i = 1; i <= n; i += 1) {
            if (i === primeiroAsterisco || i === ultimoAsterisco || index === meioDaMatrix) {
                linha += '*';
            } else {
                linha += ' ';
            }
        }
        console.log(linha)
    }
} else {
    console.log("Por favor inserir um valor ímpar")
}

