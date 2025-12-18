const leia = require('readline-sync')

let num = []
let soma = 0

for (let i=0;i<10;i++){
    num[i] = Number(leia.question(`Digite o valor do ${i} numero:`))
    soma += num[i]
}
console.log(`A soma de todos os numeros e: ${soma}`)