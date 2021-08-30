function quemPodeEntrarNoBrinquedo(array) {
    for (let index = 0; index < array.length; index += 1) {
        const condição = array[index] >= 1.80 
        ? console.log(`Você tem ${array[index]} metros de altura.\nEntrada Permitida\n`)
        : console.log(`Você tem ${array[index]} metros de altura.\nEntrada Não Permitida\n`)
    }
}

const array = [1.73, 1.81, 1.85];
quemPodeEntrarNoBrinquedo(array);