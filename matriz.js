const paises = [
    ["Brasil", 213993437],
    ["Estados Unidos", 331002651],
    ["China", 1439323776],
    ["Índia", 1380004385],
    ["Japão", 126476461],
    ["Alemanha", 83783942],
    ["França", 65273511],
    ["Reino Unido", 67886011],
    ["Itália", 60244639],
    ["Canadá", 37742154]
];

let maiorPopulacao = 0
let pais = 0

for(let i = 0; i < 10; i++){
        
    for(let j = 0; j < 2; j++){
       if(paises[i][1]> maiorPopulacao){

        maiorPopulacao = paises[i][1];
        pais = paises[i][0]
       }
        
        


       console.log(paises[i][j])
       

    
    }
}


// Exibir a matriz no console
console.log(paises);
console.log("o pais com maior populacao é:", pais , maiorPopulacao )