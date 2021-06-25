/* 

O enunciado diz:
Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final
seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem:
"valor menor que 16":

let fruits = [3, 4, 10, 1, 12];

A resolução do problema acontece em 3 etapas:

Interpretação;

Criação do algoritmo;

Codificação do algoritmo.

Baby Steps:

Adicionar o array;
Criar uma variável com valor 0;
Criar um loop que percorre o array;
Incrementar a variável com o valor correspondente a cada loop;
Criar um if com a condição da variável ser maior que 15;
Caso a variável obedeça a condição;
Imprimir a variável
Caso não obedeça a condição;
Imprimir a mensagem "valor menor que 16";

*/

let fruits = [3, 4, 10, 1, 12];

let soma = 0;

for (let index = 0; index < fruits.length; index += 1) {

    soma += fruits[index];

}

if (soma > 15) {

    console.log(soma);

} else {

    console.log("Valor menor que 16");

}