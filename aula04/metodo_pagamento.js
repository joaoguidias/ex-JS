const leia = require('readline-sync')

nome = leia.question("Nome do produto:")
valor = Number(leia.question('Valor do produto:'))
console.log("PAGAMENTO")
console.log("[1] PIX (10% DE DESCONTO)")
console.log('[2] DINHEIRO (5% DE DESCONTO')
opcao = Number(leia.question('Qual será o método de pagamento:'))
if (opcao == 1){
    desconto = (valor * 0.1) 
    valor_total = valor - desconto
    console.log(`O valor do produto com 10%(R$${desconto}) de desconto é:R$${valor_total} `)
}else if (opcao==2){
    desconto = (valor * 0.05) 
    valor_total = valor - desconto
    console.log(`O valor do produto com 5%(R$${desconto}) de desconto é:R$${valor_total} `)
}
console.log('fim')