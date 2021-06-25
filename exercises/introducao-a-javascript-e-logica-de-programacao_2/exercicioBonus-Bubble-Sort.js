/*

Exercício 1: Ordene o array numbers em ordem crescente e imprima seus valores;

Exercício 2: Ordene o array numbers em ordem decrescente e imprima seus valores;

Exercício 3: Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no 
array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) 
e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante.

Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
    //console.log(numbers)
  }
  console.log(`O resultado do Exercício 1 é ${numbers}`);

  for ( let index =( (numbers.length - 1) - 1 ); index >= 0 ; index -= 1 ) {
      for ( let i = (numbers.length -1); i > index ; i -= 1 ) {
          if ( numbers[i] > numbers[index] ) {
              let troca = numbers [index];
              numbers[index] = numbers[i];
              numbers[i] = troca;
          }
      }
      //console.log(numbers)
  } 

  console.log(`O resultado do Exercício 2 é ${numbers}`);

  let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  let array = [];

  for ( let index = 0; index < numeros.length; index += 1) {
    let arrayNumeros;

    if ( index < (numeros.length -1) ) {
        arrayNumeros = numeros[index]*numeros[index+1];
        array.push(arrayNumeros);
    } else if (index <= (numeros.length -1) ) {
        arrayNumeros = numeros[index]*2;
        array.push(arrayNumeros);
    }
      
  }
  console.log(array)