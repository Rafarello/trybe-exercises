/*

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Utilizando for , descubra qual o menor valor contido no array e imprima-o;

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = Number.POSITIVE_INFINITY;

for (let contador = 0; contador < numbers.length; contador +=1) {
    
    if ( menorValor < numbers[contador]){
       menorValor = menorValor;
   } else {
       menorValor = numbers[contador]
   }
   
   console.log(`O menor número da iteração ${contador+1} é ${menorValor}`)
}