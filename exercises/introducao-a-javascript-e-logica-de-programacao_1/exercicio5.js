/*

Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.

*/
// exercicio bonus: se a, b e c forem unidades de comprimento
let a;
let b;
let c;

a = 5;
b = 10;
c = 9;

// condição encontrada no site https://mundoeducacao.uol.com.br/matematica/condicao-existencia-um-triangulo.htm#:~:text=S%C3%B3%20ir%C3%A1%20existir%20um%20tri%C3%A2ngulo,soma%20dos%20outros%20dois%20lados.
if (Math.abs(b-c) < a < (b+c) && Math.abs(a-c) < b < (a+c) && Math.abs(a-b) < c < (a+b)){
    console.log(true);
} else {
    console.log(false);
}

let angulo1;
let angulo2;
let angulo3;

angulo1 = 10;
angulo2 = 20;
angulo3 = 150;

if (angulo1 + angulo2 + angulo3 === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    console.log(true);
} else {
    console.log(false)
}