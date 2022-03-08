const chave3 = 'Leo';
const segredo = 'Cassia';
const array = [1, 2, 3, 4];

const caceteQueChatisseCallback = (elemento, indice, arrayInteiro) => {
  console.log(elemento);
  console.log(indice);
  console.log(arrayInteiro);
}


const objeto = {
  chave2: 'Rafael',
  chave1: { nome: 'Mateus' },
  segredo,
  array,
  objetoChato: caceteQueChatisseCallback,
  objetoChato2: (elemento, indice, arrayInteiro) => {
    console.log(elemento);
    console.log(indice);
    console.log(arrayInteiro);
  },
}

const retornoDoObjeto = objeto;

const { chave1: { nome } } = objeto;

console.log(nome);

const [indice0, indice2, indice3,indice4] = array;

console.log(indice4);

const operaçõesMatematicas = {
  somar: (num1, num2) => num1 + num2,
  subtrair: (num1, num2) => num1 - num2,
  multiplicar: (num1, num2) => num1 * num2,
  dividir: (num1, num2) => num1 / num2,
}

module.exports = {
  operaçõesMatematicas,
}