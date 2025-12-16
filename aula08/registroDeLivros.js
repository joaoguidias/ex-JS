const leia = require('readline-sync')

let livros =[]

console.log("SISTEMA DE CADASTRO DE LIVROS")

for (let i =0;i<3;i++){
    let Tlivro = {

    }
    Tlivro.titulo = leia.question("Título do livro:")
    Tlivro.auto = leia.question("Autor:")
    Tlivro.ano = Number(leia.question("Ano:"))

    livros.push(Tlivro)
}
console.table(livros)