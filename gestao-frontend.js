const prompt = require("prompt-sync")();
const backend = require("./gestao-beckend.js");

let menu = ''

function exibirMenu(){
    console.log("1. Adicionar produto")
    console.log("2. Deletar produto")
    console.log("3. listar produtos:")
    console.log("4. Total de estoque: ")
    console.log("5. Sair")

    menu = prompt(" Escolha uma opção: ")
            console.log("---------------------")


    switch (menu) {

        case '1':
            
            break;

        case '2':
            

            break;
        case '3':
            backend.mostrarDados()
            
            break
        case '4':
            
            
                break;
        case '5':
             

        default:
            
    }

}
while(menu !== "5"){
    exibirMenu()
}

    