const tabela = 
[
    {nome: "Cliente 1" , gastoTotal: 10000 },
    {nome: "Cliente 2" , gastoTotal: 5000 }
]

function mostrarDados(){

    console.table(tabela);
}

function inserirDado(pNome, pGasto){
    tabela.push({nome:pNome, gastoTotal:pGasto})

}

module.exports = {mostrarDados, inserirDado}



