const prompt = require("prompt-sync")();
const backend = require("./gestao-beckend.js");

let menu = ''

function exibirMenu(){
    
    backend.mostrarDados()
    console.log("1. Adicionar produto")
    console.log("2. Deletar produto")
    console.log("3. listar produtos:")
    console.log("4. Total de estoque: ")
    console.log("5. Sair")

    menu = prompt(" Escolha uma opção: ")
            console.log("---------------------")


    switch (menu) {

        case '1':
        let a = prompt("Qual produto vc quer inserir? ")
        let b = prompt("Qual a cor? ")
        let c = prompt("Qual tamanho? ")
        let d = parseInt(prompt("Qual a quantidade? "))
        let e = parseInt(prompt("Qual o valor? "))
            backend.inserirDado(a,b,c,d,e)
             backend.mostrarDados()
            break;

        case '2':
            
          let f =  prompt ("Qual indice vc quer deletar?")
           backend.deletarProduto(f);
            backend.mostrarDados()
            break;
        case '3':
            backend.mostrarDados()
            
            break;
        case '4':
            console.log(backend.quantiProduto())
            
                break;
        case '5':
             console.log("Vc saiu!")

        default:
            
    }

}
while(menu !== "5"){
    exibirMenu()
}

    