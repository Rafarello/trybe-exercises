/* 

Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, 
a divisão dele com quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, 
vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

Para adicionar um nível de dificuldade a mais, imprimir quais numeros primos tem entre 0 até n

*/

let n;

n = 30;

// index irá do primeiro número primo possível entre 0 até n, 
// para cada index será necessário uma iteração para contagem de numeros primos
// cada iteração irá ter a confirmação se possui mais de um divisor com resto zero (%)
// pela contagem do contadorNumeroPrimos

for (let index = 2; index <= n; index += 1) {
    let contadorNumeroPrimos = 0;
    for (divisores = 1; divisores <= n; divisores += 1) {
        if (index % divisores === 0) {
            contadorNumeroPrimos += 1;
        }
    }
    if (contadorNumeroPrimos === 2) {
        console.log(`O número ${index} é primo`);
    }
}