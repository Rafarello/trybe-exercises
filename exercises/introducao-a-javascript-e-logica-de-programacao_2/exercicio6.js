/*

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contadorNumeroImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if ( numbers[index] % 2 !== 0) {
        contadorNumeroImpares += 1;
    }
    console.log(`A quantidade de numeros ímpares na repetição ${index} é ${contadorNumeroImpares}`)
}
