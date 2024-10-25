const prompt = require("prompt-sync")();
const backend = require("./gestao-beckend.js");

let menu = ''

function exibirMenu(){
    
    
    console.log("1. Adicionar produto")
    console.log("2. Deletar produto")
    console.log("3. listar produtos:")
    console.log("4. Total de estoque: ")
    console.log("5. Localizar Produto: ")
    console.log("6. Sair")

    menu = prompt(" Escolha uma opção: ")
            console.log("---------------------")


    switch (menu) {

        case '1':
        
        let a = parseInt(prompt("Digite o codigo do produto: "))
        let b = prompt("Qual produto vc quer inserir? ")
        let c = prompt("Qual a cor? ")
        let d = prompt("Qual tamanho? ")
        let e = parseInt(prompt("Qual a quantidade? "))
        let f = parseInt(prompt("Qual o valor? "))
            backend.inserirDado(a,b,c,d,e,f)
             backend.mostrarDados()
             console.log("Produto cadastrado com sucesso.")
                break;

        case '2':
            
          let g =  prompt ("Qual indice vc quer deletar?")
           backend.deletarProduto(g);
            backend.mostrarDados()
                break;
        case '3':
            backend.mostrarDados()
            
                break;
        case '4':
            console.log(backend.quantiProduto())
            
                break;

        case '5':
        let Localizar = prompt("Digite o codigo do Produto:")
          console.log( backend.LocalizarProduto(Localizar))

                break;

        case '6':
             console.log("Vc saiu!")

        default:
            
    }

}
while(menu !== "6"){
    exibirMenu()
}

    