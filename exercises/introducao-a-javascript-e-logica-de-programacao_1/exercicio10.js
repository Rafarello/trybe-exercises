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
