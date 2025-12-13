const leia = require('readline-sync')

console.log('COFRINHO DIGITAL')
console.log('-=-=-=-=-=-=-=-=')
meta = Number(leia.question(`Defina um valor como meta:R$`))
total = 0

while (total <=meta){
    valor = Number(leia.question('Digite um valor para depósito:R$'))
    total = total + valor 
    console.log(`COFRINHO: R$${total}`)
}
console.log('Parabens, sua meta foi atingida!')