/*
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , 
definidas no começo com os valores que serão operados. 
Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

*/

let a = 10;
let b = 5;

let adicao;
let subtracao;
let multiplicacao;
let divisao;
let modulo;

adicao = a + b;
subtracao = a - b;
multiplicacao = a * b;
divisao = a / b;
modulo = a % b;

console.log(adicao, subtracao, multiplicacao, divisao, modulo);

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

console.log(`O resultado da adição de ${a} + ${b} é igual a ${a+b}`);
console.log(`O resultado da subtração de ${a} - ${b} é igual a ${a-b}`);
console.log(`O resultado da multiplicação de ${a} vezes ${b} é igual a ${a*b}`);
console.log(`O resultado da divisão de ${a} dividido por ${b} é igual a ${a/b}`);
console.log(`O resultado do módulo de ${a} por ${b} é igual a ${a%b}`);