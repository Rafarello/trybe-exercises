/*

Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. 
A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)

*/
let custoDoProduto;
let valorDeVenda;

custoDoProduto = 100;
valorDeVenda = 200;

let valorCustoTotal = custoDoProduto*1.20;
let lucro = valorDeVenda - valorCustoTotal;

if (custoDoProduto < 0 || valorDeVenda <0 ) {
    console.log("[ERRO] Valor ou valores menores que zero")
} else if (custoDoProduto > 0 && valorDeVenda > 0 && lucro > 0){
    console.log(`O lucro ao vender mil desses produtos é de ${lucro*1000}`)
} else if (custoDoProduto > 0 && valorDeVenda > 0 && lucro < 0) {
    console.log(`O prejuízo ao vender mil desses produtos é de ${lucro*1000}`)
} else if (custoDoProduto > 0 && valorDeVenda > 0 && lucro === 0) {
    console.log("Não houve lucro nem prejuízo, as contas estão em paridade")
} else {
    console.log("Dados inválidos, verificar dados de entrada")
}
