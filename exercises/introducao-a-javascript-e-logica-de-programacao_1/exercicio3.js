let a;
let b;
let c;

a = 10;
b = 15;
c = 5;

if (a > b && a > c){
    console.log(`${a} é maior que ${b} e ${c}`);
    console.log(a);
} else if (b > a && b > c) {
    console.log(`${b} é maior que ${a} e ${c}`);
    console.log(b)
} else if (c > a && c > b) {
    console.log(`${c} é maior que ${a} e ${b}`);
    console.log(c);
} else {
    console.log("Dados de entrada inválidos");
}