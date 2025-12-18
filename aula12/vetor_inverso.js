const leia = require ('readline-sync')

let num =[]

for (let i =0;i<6;i++){
    num[i] = Number(leia.question(`Valor do ${i} numero:`))
}
for (let i=6; i>=0;i--){
    console.log(num[i])
}
