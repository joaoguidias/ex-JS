const leia = require('readline-sync')
let ouro = 100
let opcao


console.log("LOJA DE ITENS, GASTE TODO SEU OURO!")
console.log("=-=-=-=-=-=-=-=--=--=-=-=-=-=-=--=-")
while (ouro > 0 && opcao != 4) {
    opcao = Number(leia.question(`
    [1] - Espada Magica - 50 de ouro
    [2] - Escudo de Dragao - 40 de ouro
    [3] - Pocao de Cura - 10 de ouro
    [4] - Sair da loja 
    `))
    switch (opcao) {
        case 1:
            if (ouro >= 50) {
                ouro = ouro - 50
                console.log(`Espada comprada, ouro total:${ouro}`)
            } else {
                console.log("Ouro Insuficiente")
            }
            break
        case 2:
            if (ouro >= 40) {
                ouro = ouro - 40
                console.log(`Escudo de Dragao comprado, ouro total:${ouro}`)
            } else {
                console.log("Ouro Insuficiente")
            }
            break
        case 3:
            if (ouro >= 10) {
                ouro = ouro - 10
                console.log(`Pocao de Cura comprada,: ouro total:${ouro}`)
            } else {
                console.log("Ouro Insuficiente")
            }
            break
        default:
            console.log("Opcao invalida")
            break
    }
}
