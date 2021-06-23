/*

Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. 
Caso contrário, ele retorna false .

Bonus: use somente um if .

*/
let a;
let b;
let c;

a = 4;
b = 6;
c = 8;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}