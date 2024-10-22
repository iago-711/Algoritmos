const tabela = 
[
    {produto: "Camisa Azul" , tamanho: "G", preco: 20 },
    {produto: "Camisa verde" , tamanho: "M" , preco: 30 },
    {produto: "Camisa bege" , tamanho: "P" , preco: 25 },
    {produto: "Camisa laranja" , tamanho: "G" , preco: 45 }
]

function mostrarDados(){

    console.table(tabela);
}

function inserirDado(pProduto, pTamanho, pPreco){
    tabela.push({produto:pProduto, tamanho:pTamanho, preco:pPreco})

}

module.exports = {mostrarDados, inserirDado}








