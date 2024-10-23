const tabela = 
[
    {produto: "Camisa", cor: "Azul" , tamanho: "G", quantidade: 10, valor: 20 },
    {produto: "Camisa", cor: "verde" , tamanho: "M", quantidade: 15, valor: 30 },
    {produto: "Camisa", cor: "bege", tamanho: "P", quantidade: 20 , valor: 25 },
    {produto: "Camisa", cor: "laranja" , tamanho: "G", quantidade: 30 , valor: 45 }
]

function mostrarDados(){

    console.table(tabela);
}

function inserirDado(pProduto, pCor, pTamanho,pQuantidade, pValor){
    tabela.push({produto:pProduto, cor:pCor, tamanho:pTamanho, quantidade:pQuantidade, valor:pValor})

}

function deletarProduto(indice){
    tabela.splice(indice,1)
}

function quantiProduto(){
    let somaProduto = 0
    for (let i = 0; i < tabela.length; i++){
        somaProduto=somaProduto+tabela[i].quantidade
    }
    return somaProduto
}

module.exports = {mostrarDados, inserirDado, deletarProduto, quantiProduto}








