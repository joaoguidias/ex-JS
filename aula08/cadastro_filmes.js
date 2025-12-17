const leia = require('readline-sync')
let notaTotal =0
let media = undefined
let filmes = []

for (let i =0;i<5;i++){
    let Tfilme = {

    }
    Tfilme.nome = leia.question(`Digite o nome do ${i} filme:`)
    Tfilme.nota = Number(leia.question(`Nota de 0-10 para o filme:`))
    notaTotal = notaTotal + Tfilme.nota

    filmes.push(Tfilme)
}
media = notaTotal / 5
console.log(`A média das notas foram ${media}, e abaixo os filmes que estão a cima da média`)
for (let i =0;i<5;i++){
    if(filmes[i].nota>= media){
        console.log(`${filmes[i].nome} | NOTA: ${filmes[i].nota}`)
    }
}