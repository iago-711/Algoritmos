const prompt =require("prompt-sync")();
const texto =prompt("digite um texto?")
console.log(`O tamanho do texto e de ${texto.length}`)

const palavra = prompt("digite a palavra que deseja substituir?")
const nova = ("digite a palavra nova")
console.log(texto.replaceAll(palavra,nova))
