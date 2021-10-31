/*Faça um programa que tenha uma função chamada area(),
que receba as dimensões de um terreno retangular
(largura e comprimento) e mostre a área do terreno:*/

const promp = require('prompt-sync')();



const area = (l,c) => {
    console.log(`A área do terreno é ${l*c}m^2`)
}

const l = promp("Digite a largura em metros: ")
const c = promp("Digite a comprimento em metros: ")
area(l,c);