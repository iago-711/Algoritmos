let prompt = require("prompt-sync")();

let l = prompt ("digite se vc quer par impar: ")
let escolha = parseInt (prompt ("digite o numero: "))
let maquina = (Math.floor(Math.random()*(10-1+1)+1))
let soma1 = escolha+maquina 
let avaliacao = ""
if  (soma1 % 2 ==0) {
    console.log("numero é par")
    avaliacao="par"
} else { 
    console.log("numero é impar")
    avaliacao="impar"
}
let  = (soma1 %2==0 && l=="par") || (soma1 %2!==0 && l=="impar")

if (avaliacao==escolha==soma1)
    console.log (`voce escolheu ${escolha}. a maquina escolheu ${maquina}. então, ${escolha} + ${maquina} = ${escolha+maquina}. você ganhou`)

else 
    console.log (`voce escolheu ${escolha}. a maquina escolheu ${maquina}. então, ${escolha} + ${maquina} = ${escolha+maquina}. vc perdeu`)
