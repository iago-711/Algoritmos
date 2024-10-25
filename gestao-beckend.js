const tabela = 
[
    {codigo: 1, produto: "Camisa", cor: "Azul" , tamanho: "G", quantidade: 10, valor: 20 },
    {codigo: 2, produto: "Camisa", cor: "verde" , tamanho: "M", quantidade: 15, valor: 30 },
    {codigo: 3, produto: "Camisa", cor: "bege", tamanho: "P", quantidade: 20 , valor: 25 },
    {codigo: 4, produto: "Camisa", cor: "laranja" , tamanho: "G", quantidade: 30 , valor: 45 }
]

function mostrarDados(){

    console.table(tabela);
}

function inserirDado(pCodigo, pProduto, pCor, pTamanho,pQuantidade, pValor){
    tabela.push({codigo:pCodigo, produto:pProduto, cor:pCor, tamanho:pTamanho, quantidade:pQuantidade, valor:pValor})

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

function LocalizarProduto(codigo){
    
    let retorno = ''
    for(let i = 0; i < tabela.length; i++){
        if(tabela [i].codigo == (codigo)){
            retorno = "codigo: " + tabela[i].codigo + " - produto: " +tabela[i].produto + " Cor: " +tabela[i].cor + " Tamanho " + tabela[i].tamanho + " Quantidade " + tabela[i].quantidade + " Valor " + tabela[i].valor
        }
        else{

        }
    } 
    return retorno

}


module.exports = {mostrarDados, inserirDado, deletarProduto, quantiProduto, LocalizarProduto}








