const leia = require('readline-sync')

let carros = []

console.log("APENAS MODELOS DE 2015 A DIANTE SERAO EXIBIDOS")


for (let i =0;i<5;i++){
    let carro = {

    }
    carro.modelo = leia.question(`Modelo do ${i} carro:`)
    carro.ano = Number(leia.question(`Ano do ${i} carro:`))

    carros.push(carro)
}
console.log("=--=-=-=--=-=-=--=-=-=--=")
for(let i =0;i<5;i++){  
    if(carros[i].ano >=2015){
        console.log(`MODELO:${carros[i].modelo} | ANO: ${carros[i].ano}`)
    }else {
        console.log("MODELO ANTIGO")
    }
}