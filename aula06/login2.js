const leia = require('readline-sync')

senha = 1234

tentativas=1
while (tentativas <3){
    num = Number(leia.question('Digite a senha para desbloquear o acesso:'))
    if (num == senha){
        tentativas = 3
        console.log("ACESSO PERMITIDO")
    }else{
        console.log(`SENHA INCORRETA, TENTATIVAS RESTANTES : ${3-tentativas}`)
    }
    tentativas = tentativas + 1
}