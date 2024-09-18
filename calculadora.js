const prompt = require("prompt-sync")();

const numero1 = parseInt (prompt("digite o primeiro numero"))
const numero2 = parseInt (prompt("digite segundo numero"))
const operador = prompt ("digite a operacao" )

switch( operador )  {
    case "+":
        console.log( numero1+numero2);
        break;
    case "-":
        console.log(numero1-numero2);
        break;
    
    case "*":
        console.log(numero1*numero2);
        break;
    case "/":
        if((numero1==0 || numero2==0) && operador == "/" ){
            console.log("nao e possivel a divisao")
            break;
        } else{
             console.log(numero1/numero2)
        }    break;

    default:
        console.log("erro")


}
