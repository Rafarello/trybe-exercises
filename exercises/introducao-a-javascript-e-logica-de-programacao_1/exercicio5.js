// exercicio bonus: se a, b e c forem unidades de comprimento
let a;
let b;
let c;

a = 5;
b = 10;
c = 9;

// condição encontrada no site https://mundoeducacao.uol.com.br/matematica/condicao-existencia-um-triangulo.htm#:~:text=S%C3%B3%20ir%C3%A1%20existir%20um%20tri%C3%A2ngulo,soma%20dos%20outros%20dois%20lados.
if (Math.abs(b-c) < a < (b+c) && Math.abs(a-c) < b < (a+c) && Math.abs(a-b) < c < (a+b)){
    console.log(true);
} else {
    console.log(false);
}

let angulo1;
let angulo2;
let angulo3;

angulo1 = 10;
angulo2 = 20;
angulo3 = 150;

if (angulo1 + angulo2 + angulo3 === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    console.log(true);
} else {
    console.log(false)
}