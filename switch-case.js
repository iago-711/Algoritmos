const prompt =require("prompt-sync")();
const plano = prompt("Qual o seu plano?")


switch (plano) {

    case 'basico':
    console.log("voce tem o plano basico,e voce tem acesso a filmes a 480p e voce pode olhar em uma tela.")
        break;
    case 'premium':
        console.log("voce tem o plano premium,e tem acesso a filmes a 1080p e pode olhar em 4 telas.")
        break;
    case 'familiar':
        console.log("voce tem o plano familiar, e tem acesso a filmes a 4k e pode olhar em 6 telas")
        break;
    default:
        console.log("plano invalido")

}