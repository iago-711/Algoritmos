const prompt = require("prompt-sync")();
const plano = prompt("digite seu plano?")

switch (plano)  {
    case "Basico":
    console.log("Plano Básico: Acesso a filmes em 480p, 1 tela.")
        break;

    case "Premium":
    console.log("Plano Premium: Acesso a filmes em 1080p, 4 telas.")
        break;

    case "Familiar":
        console.log("Plano Familiar: Acesso a filmes em 4K, até 6 telas simultâneas.")
        break;
 
    default:
        console.log("Plano inválido.")


}

     
