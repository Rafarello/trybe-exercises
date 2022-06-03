function concatName(string) {
    let index1 =  string.shift();
    let index2 = string.pop();
    string = [index2, index1];

    console.log(string);
}

let arrayDeNomes = ['Cassiano', 'Lucas', 'David', 'Mateus'];
let arrayDeNomes2 = ['Leonardo', 'Lucas', 'David', 'Guilherme'];
let arrayDeNomes3 = ['Rafael', 'Lucas', 'David', 'Igor'];

concatName(arrayDeNomes);
concatName(arrayDeNomes2);
concatName(arrayDeNomes3);

export function concatName();