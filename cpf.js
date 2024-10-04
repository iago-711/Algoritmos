function numeros (cpf) { 
const cpfnovo = cpf.replaceAll(".","").replaceAll("-","")
return cpfnovo


}

    console.log(
        numeros("023.380.400-30")
    )
    console.log(
        numeros("003.380.400-30")
    ) 
    console.log(
        numeros("123.380.400-50")
    )
     console.log(
        numeros("003.390.400-30")
    )