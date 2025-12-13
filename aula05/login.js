const leia = require('readline-sync')

let usuario = "fatec"
senha = 12345

console.log("SISTEMA DE LOGIN")
console.log("-=-=--=-=-=-=-=-=")
for (let i=0;i<3;i++){
    console.log(`Tentativa N${i}`)
    usuario_digitado = leia.question('Digite o nome de usuário:')
    senha_digitado = leia.question('Digite sua senha:')
    if (usuario_digitado == usuario && senha_digitado == senha){
        console.log(`Bem vindo ao sistema ${usuario}`)
    }else{
        console.log(`Usuário ou senha inválidos, tente novamente!`)
    }

}