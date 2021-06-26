let n = 5; // 
let meioDaMatrix = ( n + 1 ) / 2
let primeiroAsterisco = meioDaMatrix;
let ultimoAsterisco = meioDaMatrix;

for (let index = 1; index <= meioDaMatrix; index += 1, ultimoAsterisco += 1, primeiroAsterisco -= 1) {
    let linha = '';
    for ( i = 1; i <= n ; i += 1) {
        if (i === primeiroAsterisco || i === ultimoAsterisco || index === meioDaMatrix){
            linha += '*';
        } else {
            linha += ' ';
        }
   }
    console.log(linha)
}