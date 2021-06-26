let n;

n = 6;

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
