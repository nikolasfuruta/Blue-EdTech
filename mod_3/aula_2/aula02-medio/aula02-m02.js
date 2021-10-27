/*Faça um script que peça um valor e mostre na tela
se o valor é positivo ou negativo e implemente a
funcionalidade de não aceitar o número 0, no prompt.*/

const promp = require('prompt-sync')();

const positivoNegativo = () => {
    let num = Number(promp("Digite um valor: "));

    while(num==0){
        num = Number(promp("Digite um valor: "));
    }

    if(num > 0){
        console.log(`${num} é POSITIVO`)
    } else {
        console.log(`${num} é NEGATIVO`)
    }
}

positivoNegativo();