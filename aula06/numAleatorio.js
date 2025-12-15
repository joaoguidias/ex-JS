const leia = require('readline-sync')

let numero = Math.floor(Math.random() * 100) + 1

console.log("FOI SORTEADO UM NUMERO DE 1 A 100,DESCUBRA!")
console.log(" ")
let valor
while ( valor != numero){
    valor = Number(leia.question('Digite seu palpite?:'))
    if (valor > numero){
        console.log('Muito alto, tente um número menor')
    }else if (valor < numero){
        console.log("Muito baixo, tente um valor maior ")
    }else {
        console.log("Parabens voce acertou!")
    }
}

/*FINALIZAR, NAO DEU CERTO*/
