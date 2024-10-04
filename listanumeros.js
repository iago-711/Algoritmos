let listaNumeros = [12,3,45,7,22,23,50];
let quantidade =0
let maiorvalor = 0
for (let i =0; i <  listaNumeros.length; i++){

 console.log(listaNumeros[i] )

    quantidade=quantidade+ listaNumeros[i]

    if(listaNumeros[i] > maiorvalor){
        maiorvalor = listaNumeros[i]

    }



}
console.log("o maior numero é " + maiorvalor)