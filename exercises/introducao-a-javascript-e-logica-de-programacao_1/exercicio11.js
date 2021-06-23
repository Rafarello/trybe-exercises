let salarioBruto;
let salarioLiquido;
let salarioLiquidoIR

salarioBruto = 3000;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto*(1-8/100)
} else if (salarioBruto <= 2594.92) {
    salarioLiquido = salarioBruto*(1-9/100)
} else if (salarioBruto <= 5189.82) {
    salarioLiquido = salarioBruto*(1-11/100)
} else if (salarioBruto > 5189.82){
    salarioLiquido = salarioBruto - 570.88
} else {
    console.log("Valor inválido, favor checar valor de entrada")
}

if (salarioLiquido > 0 && salarioLiquido <= 1903.98) {
    salarioLiquidoIR = salarioLiquido
} else if (salarioBruto <= 2826,65) {
    salarioLiquidoIR = salarioLiquido - ((salarioLiquido*7.5/100)-142.8)
} else if (salarioBruto <= 3751.05) {
    salarioLiquidoIR = salarioLiquido - ((salarioLiquido*15/100)-354.8)
} else if (salarioBruto <= 4664.68) {
    salarioLiquidoIR = salarioLiquido - ((salarioLiquido*22.5/100)-636.13)
} else {
    salarioLiquidoIR = salarioLiquido  - ((salarioLiquido*27.5/100)-869.36)
} 
console.log(`O salário bruto é R$${salarioBruto}`)
console.log(`O salário líquido após a redução do INSS é de R$ ${salarioLiquido}`)
console.log(`O salário líquido após a redução do INSS e do Imposto de Renda é de R$ ${salarioLiquidoIR}`)