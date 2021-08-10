/*

Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false

*/

function verificaPalindrome(word){
    for(index in word){
      if(word[index].toLowerCase() != word[(word.length - 1) - index].toLowerCase()){
        return false;
      }
    }
    return true;
  }

  console.log(verificaPalindrome('Arara'));