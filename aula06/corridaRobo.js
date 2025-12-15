const leia = require('readline-sync')

/* Inicializa o valor dos dois robos com = 0*/
let robo1 = 0,robo2 =0
let numRobo1,numRobo2
let total1,total2 = 0
let indice = 0


console.log("CORRIDA DE ROBOS")
console.log("=-=-=-=-=-=--=-=")
while(robo1 < 100 && robo2 < 100){
    numRobo1 =  Math.floor(Math.random() * 10) + 1
    robo1 = robo1 + numRobo1

    numRobo2 =  Math.floor(Math.random() * 10) + 1
    robo2 = robo2 + numRobo2

    console.log(`Robo 1:${numRobo1}M - TOTAL:${robo1}M | Robo 2:${numRobo2}M - TOTAL:${robo2}M`)
}
if (robo1 >= 100 && robo2 >=100){
    console.log("EMPATOU")
}else if (robo1 >= 100){
    console.log("ROBO 1 GANHOU")
}else if(robo2 >= 100){
    console.log("ROBO 2 GANHOU")
}
