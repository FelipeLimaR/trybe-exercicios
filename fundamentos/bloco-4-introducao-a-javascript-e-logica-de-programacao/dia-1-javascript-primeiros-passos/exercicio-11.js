//11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
//Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 3000;
let aliquotaInss = 0;

// calcula INSS
if (salarioBruto  < 1556.94) {
    aliquotaInss = salarioBruto * (8 / 100)
} else if (salarioBruto  >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaInss = salarioBruto * (9 / 100)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquotaInss = salarioBruto * ( 11/ 100)
}else if (salarioBruto  > 5189.82){
    aliquotaInss = 570.88
}

let descontoInss = salarioBruto - aliquotaInss;
let aliquotaIR = 0;

//calcula IR
if (descontoInss < 1903.98) {
    console.log("Isento de imposto de renda");
} else if (descontoInss >= 1903.99 && descontoInss <= 2826.65) {
    aliquotaIR = descontoInss * (7.5 / 100) - 142.80
} else if (descontoInss >= 2826.66 && descontoInss <= 3751.05) {
    aliquotaIR = descontoInss * (15 / 100) - 354.80
} else if (descontoInss >= 3751.06 && descontoInss <= 4664.68) {
    aliquotaIR = descontoInss * (22.5 / 100) - 636.13
} else if (descontoInss > 4664.68) {
    aliquotaIR = descontoInss * (27.5 / 100) - 869.36
}

const salarioLiquido = descontoInss - aliquotaIR;
console.log("O valor do salário líquido é de R$" + salarioLiquido);