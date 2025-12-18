const leia = require('readline-sync')

let alunos = []
let idadeMedia = undefined
let idadeTotal = 0
let indice = 0

 
for(let i = 0;i<5;i++){
    let Taluno = {

    }
    Taluno.nome = leia.question(`Digite o nome do ${i} aluno:`)
    Taluno.idade = Number(leia.question(`Idade desse aluno:`))
    idadeTotal += Taluno.idade

    alunos.push(Taluno)
}
idadeMedia = idadeTotal / 5 

let alunoMaisNovo = alunos[0].idade 


for (let i = 1; i< alunos.length;i++){
    if(alunos[i].idade < alunoMaisNovo){
        alunoMaisNovo = alunos[i].idade
        indice = i
    }
}

let maior18 = 0
for (let i = 0;i<5;i++){
    if(alunos[i].idade >=18){
        maior18 +=1
    }
}
console.log("-=-=--=-=-=-=-=-==-=-=-=-=-")
console.log(`Idade Média da sala: ${idadeMedia} anos.`)
console.log(`Aluno mais novo é ${alunos[indice].nome} com ${alunos[indice].idade} anos.`)
console.log(`Quantidade de alunos com 18 anos ou mais: ${maior18}`)