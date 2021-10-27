/*Faça um programa que pergunte ao usuário um número
e valide se o numero é par ou impar:
Crie uma variável para receber o valor,
com conversão para inteiro.Para um número ser par,
a divisão dele por 2 tem que dar resto 0*/

const promp = require('prompt-sync')();

const parImpar = ()=>{
    const num = Number(promp("Digite um número: "))
    if(num%2==0){
        console.log(`${num} é PAR`)
    } else {
        console.log(`${num} é IMPAR`)
    }
}

parImpar();