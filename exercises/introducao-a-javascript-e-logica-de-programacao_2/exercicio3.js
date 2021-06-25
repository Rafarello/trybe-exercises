/*

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for (let indice = 0; indice < numbers.length ; indice += 1) {
    resultado += numbers[indice];
}

let media = (resultado / (numbers.length) );


console.log(`A média aritmética dos elementos do Array é ${media}`);
