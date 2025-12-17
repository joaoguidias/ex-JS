const leia = require('readline-sync')
let maiorSal = undefined
let menorSal= undefined
let funcionarios = []

console.log("Digite os dados dos funcionários abaixo.")
console.log("--------------------------------------")
for(let i=0;i<4;i++){
    let funcionario = {

    }
    funcionario.nome = leia.question(`Digite o nome do ${i} funcionario:`)
    funcionario.salario = Number(leia.question(`Salário do ${i} funcionario:`))
    if (i==0){
        maiorSal = funcionario.salario
        menorSal = funcionario.salario
    }else{
        if(funcionario.salario > maiorSal){
            maiorSal = funcionario.salario
        }else if(funcionario.salario < menorSal){
            menorSal=funcionario.salario
        }
    }
    
    funcionarios.push(funcionario)
}
console.log(`O maior salário é: R$${maiorSal}`)