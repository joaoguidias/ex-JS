const leia = require ('readline-sync')


console.log("SISTEMA DE FRIOS")
console.log("----------------")
kg_mort = parseFloat(leia.question("Quilos de Mortadela:"))
kg_presunto =parseFloat(leia.question("Quilos de Presunto:"))
kg_peitoPeru = parseFloat(leia.question("Quilos de Peito de Peru:"))
kg_muss = parseFloat(leia.question("Quilos de mussarela:"))

tot_mort = kg_mort * 25.20
tot_presunto = kg_presunto * 78.20
tot_peitoPeru = kg_peitoPeru * 89.60
tot_muss = kg_muss * 56.20

comi_mort =tot_mort * 0.08
comi_presunto = tot_presunto *0.05 
comi_peitoPeru = tot_peitoPeru *0.1
comi_muss =tot_muss * 0.03 

vendas_total = tot_mort + tot_presunto + tot_peitoPeru + tot_muss
comi_total = comi_mort+ comi_presunto+ comi_peitoPeru + comi_muss


console.log("RESULTADO DA VENDA")
console.log("-=---=-=-=-=-=--=-")
console.log("MORTADELA")
console.log(`TOTAL VENDIDO KG: ${kg_mort} | TOTAL: R$${tot_mort.toFixed(2)} | COMISSAO: R$${comi_mort.toFixed(2)}`)

console.log("PRESUNTO")
console.log(`TOTAL VENDIDO KG: ${kg_presunto} | TOTAL: R$${tot_presunto.toFixed(2)} | COMISSAO: R$${comi_presunto.toFixed(2)}`)

console.log("PEITO DE PERU")
console.log(`TOTAL VENDIDO KG: ${kg_peitoPeru} | TOTAL: R$${tot_peitoPeru.toFixed(2)} | COMISSAO: R$${comi_peitoPeru.toFixed(2)}`)

console.log("MUSSARELA")
console.log(`TOTAL VENDIDO KG: ${kg_muss} | TOTAL: R$${tot_muss.toFixed(2)} | COMISSAO: R$${comi_muss.toFixed(2)}`)

console.log(`TOTAL DE VENDAS: R$${vendas_total.toFixed(2)} | TOTAL COMISSAO: R$${comi_total.toFixed(2)}`)