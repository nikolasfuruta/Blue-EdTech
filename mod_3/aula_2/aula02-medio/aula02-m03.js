/*Faça um programa que peça dois números, imprima o
maior deles ou imprima "Números iguais" se os números
forem iguais.*/

const promp = require('prompt-sync')();

const maiorNumero = () => {
    const a = Number(promp("Digite o valor: "));
    const b = Number(promp("Digite o valor: "));

    if(a>b){
        console.log(`${a} é MAIOR que ${b}`)
    } else if(a<b){
        console.log(`${b} é MAIOR que ${a}`)
    } else {
        console.log("NÚMEROS IGUAIS")
    }
}

maiorNumero();