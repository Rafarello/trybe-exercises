/*

Exercicio 2 :
Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo 
retângulo com 5 asteriscos de base.

Por exemplo:
n = 5

*
**
***
****
*****

*/

let n;

n = 5;

let linhaDeAsteriscos = ''

for (let numeroDeAsteriscos = 1; numeroDeAsteriscos <= n; numeroDeAsteriscos += 1 ) {
    
    linhaDeAsteriscos += '*'
    console.log(linhaDeAsteriscos)
} 



