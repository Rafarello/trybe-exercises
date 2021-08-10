let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Exercício 1:");
  console.log('Bem vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(" ");
console.log("Exercício 2:");
console.log(info);

console.log(" ");

console.log("Exercício 3:");
for (let key in info) {
    console.log(key);
}

console.log(" ");

console.log("Exercício 4:");
for (let key in info) {
    console.log(info[key]);
}