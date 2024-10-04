   let quantidade = 0;
   let quantidadeN = 0;
for (let numero = 1; numero <= 13; numero++) {
   let ehPrimo = true;
     
      

   for (let divisor = 2; divisor < numero; divisor++) {
       if (numero % divisor === 0) {
           ehPrimo = false;
           break;  // Se encontrar um divisor, sai do loop
       }
   }    if (ehPrimo) {
       console.log(numero + " é primo");
         
       quantidade++
      

      }
   else   {
       console.log(numero + "não  é primo");
         
       quantidadeN++
     
      }
  
}

console.log()
console.log("total de numeros primos é: " + quantidade);
console.log()
console.log("total de numeros nao primos é: "+ quantidadeN);
console.log()