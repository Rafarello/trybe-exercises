/*

Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados.

*/
let a = 10;
let b = 5;

if (a > b) {
    console.log(`${a} é maior que ${b}`);
    console.log(a);
} else if (a < b) {
    console.log(`${a} é menor que ${b}`);
    console.log(b);
} else if (a == b) {
    console.log(`${a} é igual a ${b}`)
} else {
    console.log("Dados de entrada inválidos")
}