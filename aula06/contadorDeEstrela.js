const leia = require('readline-sync')
let opcao
let contador = 0

console.log("PROGRAMA CONTADOR DE ESTRELAS")
console.log("-=-=--=-=-=-==-==-=-=-=-=-==-")
opcao = leia.question("Você vê uma estrela ?: [S/n]")
if(opcao == 's' || opcao == 'S')
    contador+=1

while(opcao == 'S' || opcao =='s'){
    opcao = leia.question("Você vê uma estrela ?: [S/n]")
    if(opcao == 'S' || opcao == 's'){
        contador += 1
    }else{
        console.log(`Quantidade de estrelas vistas:${contador}`)
    }
}