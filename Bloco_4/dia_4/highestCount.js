function highestCount(arrayDeNumeros) {
    // seu código aqui
    let arrayDeNumerosOrdenada = arrayDeNumeros.sort()
    let maiorNumero = arrayDeNumerosOrdenada[arrayDeNumerosOrdenada.length-1]
    let numeroDeVezes = 1;
    for (let index = (arrayDeNumeros.length - 1); index >= 0; index -=1) {
        if(maiorNumero === arrayDeNumerosOrdenada[index]){
            numeroDeVezes +=1;
        }
    }
    return numeroDeVezes;
}

let array = [-2, -2, -1];
var arr = [10, 5, 40, 25, -3412, 4212, -107.578, 97.453];

function sortNumber(a, b) {
   return a - b;
   
}

console.log(arr.sort(sortNumber))


