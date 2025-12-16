const leia = require('readline-sync')

let produtos = {
    nome:undefined,
    preco:undefined,
    desconto:undefined,
    preco_desconto:undefined
}

console.log("DESCONTO DE 10% EM TODOS OS PRODUTOS")
console.log("-=-=--=-=-=-=--=-=--=-=-=-=-=-=-==-")
produtos.nome = leia.question("Informe o nome do produto:")
produtos.preco = Number(leia.question("Informe o preço do produto:"))
produtos.desconto = produtos.preco * 0.1
produtos.preco_desconto= produtos.preco -  produtos.desconto
console.log(`${produtos.nome} SEM DESCONTO R$${produtos.preco} | COM DESCONTO R$${produtos.preco_desconto}`)