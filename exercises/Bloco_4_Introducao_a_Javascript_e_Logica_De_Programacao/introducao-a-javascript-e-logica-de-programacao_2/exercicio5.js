/*

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Utilizando for , descubra qual o maior valor contido no array e imprima-o;

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = Number.NEGATIVE_INFINITY;

for (let i = 0; i < numbers.length ; i += 1 ) {
    if ( numbers[i] > maiorNumero){
        maiorNumero = numbers[i];
    } else {
        maiorNumero = maiorNumero
    }
    console.log(`O maior numero na repetição ${i+1} é ${maiorNumero}`);
}
