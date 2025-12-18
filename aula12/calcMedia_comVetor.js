const leia = require('readline-sync')

let notas = []
let notasTotal =0

for(let i=0;i<10;i++){
    notas[i] = Number(leia.question(`Valor da ${i} nota:`))
    notasTotal += notas[i]
}
let media = notasTotal / 10

console.log(`SEGUE ABAIXO OS ALUNOS QUE TIRARAM ACIMA DA MEDIA (${media})`)
console.log('\n')
for(let i=0;i<10;i++){
    if(notas[i] > media){
        console.log(`ALUNO : ${i} | NOTA : ${notas[i]}`)
    }
}