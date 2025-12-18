const leia = require('readline-sync')
let maiorGols = undefined
let jogadores = []
let indice = 0

for (let i = 0; i < 5; i++) {
    let Tjogador = {

    }
    Tjogador.nome = leia.question(`Nome do ${i} jogador:`)
    Tjogador.gols = Number(leia.question('Saldo de gols do jogador:'))

    jogadores.push(Tjogador)
}

maiorGols = jogadores[0].gols

for(let i =1; i<jogadores.length; i++){
    if(jogadores[i].gols > maiorGols){
        maiorGols= jogadores[i].gols
        indice = i
    }
}

console.log(`O artilheiro que mais marcou gol foi ${jogadores[indice].nome} com ${jogadores[indice].gols} gols`)