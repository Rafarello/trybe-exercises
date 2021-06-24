let frutas = ["Maçã", "Uva", "Morango", "Banana"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

console.log(" ");

for (let indice = 0; indice < frutas.length; indice +=1) {
    console.log(frutas[indice]);
}

console.log(" ");

frutas.push("Manga");

console.log ("Console com comando .push adicionando Manga:");

console.log ("");

for (let indice = 0; indice < frutas.length; indice +=1) {
    console.log(frutas[indice]);
}

console.log (" ");

console.log("Console com comando .indexOf para achar índice de Uva:");

console.log (" ");

let indiceDaFruta = frutas.indexOf("Uva");

console.log(indiceDaFruta);

console.log("");

console.log ("Console com comando .sort() para ordenar alfabeticamente o Array:");

console.log (" ");

console.log(frutas.sort());

console.log ("");

console.log ("Novo índice da Uva após o comando .sort()");

console.log (" ");


// Pode se verificar de novo o índice da Uva

indiceDaFruta = frutas.indexOf("Uva");

console.log(indiceDaFruta); // Verifique que mudou a posição

console.log("");

frutas.pop();

console.log ("Configuração do Array após utilizar o comando .pop()");

console.log (" ");

console.log(frutas);

console.log("");

frutas.shift();

console.log ("Configuração do Array após utilizar o comando .shift()");

console.log (" ");

console.log(frutas);

