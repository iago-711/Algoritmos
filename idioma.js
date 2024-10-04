const prompt =require("prompt-sync")();

const idioma = prompt("Qual o seu idioma? ")

switch (idioma){
    case 'portugues':
        console.log("Idioma configurado para o portugues")
        break;
    case 'english': 
        console.log("Language set to English")
        break;
    case 'Español':
        console.log("Idioma configurado a Español")
        break;
    case 'Français':
        console.log("Langue définie sur le Francais")
        break;
    default:
        console.log("Idioma nao suportado")
}