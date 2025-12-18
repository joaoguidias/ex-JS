const leia = require('readline-sync')

let num = []
let indice = 0

for(let i = 0;i<10;i++){
    num[i] = Number(leia.question(`Valor do ${i} numero:`))
}
console.log('-----------------------')
let valor = Number(leia.question("Digite um numero para saber se existe no vetor:"))

for(let i=0;i<10;i++){
    if(valor == num[i]){
        console.log(`O numero ${valor} esta presente no vetor na posicao ${i}`)
    }
}