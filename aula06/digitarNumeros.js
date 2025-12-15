const leia = require('readline-sync')

let opcao
let vez =0
let maiorNum, menorNum 

do{
    vez +=1
    num = Number(leia.question('Digite um numero:'))
    if(vez == 1){
        maiorNum  =num 
        menorNum = num
    }else {
        if (num > maiorNum){
            maiorNum=num
        }else if(num< menorNum ){
            menorNum= num
        }
    }
    console.log(`Você digitou ${vez} numero.`)
    console.log(`Maior valor digitado: ${maiorNum}`)
    console.log(`Menor valor digitado:${menorNum}`) 

    opcao = leia.question('Deseja digitar mais?: [S/n]')

}while(opcao == 'S' || opcao == 's')
console.log('=-=-=-=-=--=-=--=-=-=--=--=-=-')
console.log(`Foram digitados ${vez} numeros.`)