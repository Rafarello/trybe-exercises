/*

 Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

n = 7

   *
  * *
 *   *
*******

*/

let n;

n = 8;

if (n % 2 !== 0) {
    for (let index = (n - 1); index >= 0; index -= 2) {
        linha = '';
        for (let i = 1; i <= index; i += 2) {
            linha += ' ';
        }
        let primeiroAst = index;
        let ultimoAst = (n - 1)
        if (index === 0) {
            for (let numeroDeAsteriscos = 1; numeroDeAsteriscos <= n; numeroDeAsteriscos += 1) {
                linha += '*'
            }
        } else {

            for (let i = index; i < n; i += 1) {

                if (i === primeiroAst || i === ultimoAst) {

                    linha += '*';

                } else if (i !== primeiroAst && i < n) {
                    linha += ' '
                }
            }
        }
        console.log(linha);
    }

} else {
    console.log("Por favor inserir um valor ímpar")

}
