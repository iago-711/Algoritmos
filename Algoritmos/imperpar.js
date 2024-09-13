let prompt = require("prompt-sync")();

let numero = prompt ("escolha um numero")
let A = (Math.floor(Math.random() *(10-1+1)+1))
let C = prompt ("escolha entre par ou impar")
if ((numero+A %2==0 && C=="par") || (numero+A %2!==0 && C=="impar"))
console.log ("vc ganhou", A, numero)

else 
    console.log ("perdeu",A, numero)

