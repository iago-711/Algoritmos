const prompt = require("prompt-sync")();

function submenu (){

console.log(" Menu Clinica ")
console.log(" Exames ")
console.log(" Agende seu Exame:  ")
console.log(" Resultados de Exames: ")
console.log(" Acesso mobile: ")
console.log(" Segurança: ")
console.log(" Sair ")

const menu = prompt(" Selecione uma opcão: ")


    switch (menu) {

        case "Exames":
            console.log(" Pediatria ");
            console.log(" Clinico Geral ");
            console.log(" Nutrição ");
            console.log(" Pediatria ");
                break;

        case "Agende seu Exame":
            console.log(" Nome Completo ");
            console.log(" Idade ");
            console.log(" Endereço ");
            console.log(" Numero de Celular ");   
                break;
        
        case "Resultados de Exames":
            console.log(" Nome do paciente  ");
            console.log(" senha ");
                break;











                default:
            console.log(" erro ")
                submenu()


} 

}
submenu()