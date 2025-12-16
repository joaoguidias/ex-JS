const leia = require('readline-sync')

let pessoa = {
    nome: undefined,
    idade:undefined,
    altura:undefined
}

console.log("CADASTRO DE PESSOAS")
console.log("=-=-=-=-=-=-=-=-=-=")
pessoa.nome = leia.question("Digite seu nome:")
pessoa.idade = Number(leia.question("Digite sua idade:"))
pessoa.altura = Number(leia.question('Digite sua altura:'))
console.log (`${pessoa.nome} tem ${pessoa.idade} anos e tem ${pessoa.altura}m de altura`)