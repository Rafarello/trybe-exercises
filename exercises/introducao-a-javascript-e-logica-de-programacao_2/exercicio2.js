/*

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for (let indice = 0; indice < numbers.length ; indice += 1) {
    resultado += numbers[indice];
    console.log(`A soma da repetição com ${numbers[indice]} é ${resultado}`);
}

console.log(`O resultado da soma de todos os elementos do Array é ${resultado}`)