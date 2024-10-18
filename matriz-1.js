const prompt = require("prompt-sync")();




const paises = [
    ["Brasil", 213993437],
    ["Estados Unidos", 331002651],
    ["China", 1439323776],
    ["Índia", 1380004385],
    ["Japão", 126476461],
    ["Alemanha", 83783942],
    ["França", 65273511],
    ["Reino Unido", 67886011],
    ["Itália", 60244639],
    ["Canadá", 37742154]
];

function mostrarDados(){
    console.table(paises)
}

function inserirPais(nomePais, popPais){
    paises.push([nomePais,popPais])
}

function deletarPais(indice){
    paises.splice(indice,1)
}

function encontrarPais(nomePais){
    let indice = -1
    for(let i = 0 ; i<10; i++){
        if(paises[i][0] == (nomePais)){
           indice = i;
        }
    }
    return indice
   

}


let menu = ''

function exibirMenu(){
    console.log("1. Mostrar dados")
    console.log("2. Inserir Pais")
    console.log("3. Deletar Pais")
    console.log("4. Encontrar Pais ")
    console.log("5. Sair")

    menu = prompt("Escolha uma opção: ")
            console.log("-------------------")

    switch(menu){

        case '1':
            mostrarDados();
            break;

        case '2':
            inserirPais();
            break;

        case '3':
            deletarPais();
            break;
        
        case '4':
            encontrarPais();
            break;

        case '5':
            console.log("Vc Saiu.")

        default:

    }



}
while(menu !== "5"){
exibirMenu()
}