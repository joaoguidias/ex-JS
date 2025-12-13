const leia = require('readline-sync')

let n1 = Number(leia.question("Digite a primeira nota:"))
let n2 = Number(leia.question('Digite a segunda nota:'))
md = (n1 + n2) / 2
if (md < 5){
    console.log(`SUA MENÇAO FOI "E" COM MeDIA ${md}`)

}else if(md >=5 && md <6){
    console.log(`SUA MENCAO FOI "D" COM MEDIA ${md}`)
}else if(md>=6 && md <7.5){
    console.log(`SUA MENCAO FOI "C" COM MEDIA ${md}`)
}
else if(md>=7.5 && md <8.5) {
    console.log(`SUA MENCAO FOI "B" COM MEDIA ${md}`)
}
else if(md>=8.5) {
    console.log(`SUA MENCAO FOI "A" COM MEDIA ${md}`)
}