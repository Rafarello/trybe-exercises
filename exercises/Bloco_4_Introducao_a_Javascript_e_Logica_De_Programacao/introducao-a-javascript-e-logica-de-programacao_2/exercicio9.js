/*

Utilizando o array criado no exercício anterior imprima o resultado da divisão de 
cada um dos elementos por 2 .

*/

let n = 25;

let array = [];

for (let index = 1; index <= n ; index +=1 ) {
    array.push(index);
}

let arrayDivididoPorDois = [];

for (let indice = 0; indice < array.length ; indice += 1 ) {
    arrayDivididoPorDois.push(array[indice]/2);
}
console.log(arrayDivididoPorDois);