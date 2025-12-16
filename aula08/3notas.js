const leia = require("readline-sync")

let aluno = {
    nome: undefined,
    nota1: undefined,
    nota2: undefined,
    nota3: undefined,
    media: undefined
}

console.log("SISTEMA DE MÉDIA")
console.log("=-=----=-=-=-=-=-")
aluno.nome = leia.question("Digite seu nome:")
aluno.nota1 = Number(leia.question("Digite a nota da P1:"))
aluno.nota2 = Number(leia.question("Digite a nota da P2:"))
aluno.nota3 = Number(leia.question("Digite a nota da P3:"))
aluno.media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3
if (aluno.media >=7){
    console.log(`Parabens voce passou de ano ${aluno.nome} com ${aluno.media} de media`)
}else{
    console.log(`Você esta reprovado ${aluno.nome} com ${aluno.media} de media`)
}
