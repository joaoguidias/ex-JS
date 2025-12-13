const leia = require("readline-sync")
let maiorNum
let menorNum
let num

for(let i=0;i<10;i++){
    num = Number(leia.question(`Digite o ${i} número:`))
    if (i ==0){
        maiorNum = num
        menorNum = num
    }else{
        if (maiorNum > num){
            maiorNum = num
        }else if(menorNum < num){
            menorNum = num
        }
    }
}
console.log(`Maior numero digitado: ${maiorNum}`)
console.log(`Menor numero digitado: ${menorNum}`)