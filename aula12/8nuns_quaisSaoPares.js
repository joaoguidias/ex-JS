const leia = require('readline-sync')

let qntPares = 0
let num = []

console.log("QUAIS NUMEROS SAO PARES?")
console.log("-----------------------")

for (let i=0;i<8;i++){
    num[i] = Number(leia.question(`Digite o valor do ${i} numero:`))
    if (num[i] % 2 == 0){
        qntPares +=1 
    }
}
console.log(`A quantidade de numeros pares digitados e ${qntPares}`)