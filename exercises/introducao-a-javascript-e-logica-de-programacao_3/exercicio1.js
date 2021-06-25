/* 

Exercicio 1 :

Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
Copiar
n = 5

*****
*****
*****
*****
*****

> Exercicio 36 do curso introdutório <

*/

let n;

n = 5;

for ( let numeroDeLinhas = 1; numeroDeLinhas <= n; numeroDeLinhas +=1 ) {
    let linhaDeAsteriscos = ''
    for (let numeroDeAsteriscos = 1; numeroDeAsteriscos <= n; numeroDeAsteriscos += 1 ) {

        linhaDeAsteriscos += '*'
    } 
    
    console.log(linhaDeAsteriscos)
}