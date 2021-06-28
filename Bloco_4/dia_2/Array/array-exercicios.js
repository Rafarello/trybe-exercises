let listaDeAfazeres = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(listaDeAfazeres.length);

// 3

let procurarPrimeiroAfazer = listaDeAfazeres[0];
console.log(procurarPrimeiroAfazer);

// Tomar café

let procurarUltimoAfazer = listaDeAfazeres[listaDeAfazeres.length - 1];
console.log(procurarUltimoAfazer);

// Brincar com o cachorro

listaDeAfazeres.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(listaDeAfazeres);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

listaDeAfazeres.pop();  // remove a última tarefa
console.log(listaDeAfazeres);

// [ 'Tomar café', 'Reunião', 'Brincar com o cachorro' ] vai remover a ultima tarefa adicionada que foi 'Fazer exercícios da Trybe'

let indiceDoAfazer = listaDeAfazeres.indexOf('Reunião');
console.log(indiceDoAfazer);

// 1