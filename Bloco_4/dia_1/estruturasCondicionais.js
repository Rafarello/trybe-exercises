// if - se
// else - senão

/*

Exemplo de estrutura condicional:

if (condicao) {
    // código
} 
else if (outraCondicao) {
    // outra condicao
}
else if (outraCondicao2) {
    // outra condicao além das anteriores
}
else {
    // condição além das mencionadas anteriormente
}

*/

// Exercício Teste:

let trybe = 19.5;

if (trybe >= 14 && trybe <14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Momento assíncrono");
}