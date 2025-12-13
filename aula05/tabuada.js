const leia = require('readline-sync')

let n = Number(leia.question('Digite um numero para saber sua tabuada:'))
for (let i =0; i<=10;i++){
    console.log(`${n} x ${i} = ${n*i}`)
}