const leia = require('readline-sync')

let num = []

for (let i =0;i<5;i++){
    num[i] = Number(leia.question(`Digite o ${i} número:`))
}
for(let i =0;i<5;i++){
    console.log(num[i])
}