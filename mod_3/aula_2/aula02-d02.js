/*Faça um programa que tenha uma função chamada
voto() que vai receber como parâmetro o ano de
nascimento de uma pessoa, retornando um valor literal
indicando se uma pessoa tem voto NEGADO, OPCIONAL ou
OBRIGATÓRIO nas eleições:*/

const promp = require('prompt-sync')();

const votos = (ano) =>{
    const anoAtual = new Date().getFullYear();
    const vida = anoAtual-ano

    if(vida<15){
        console.log("NEGADO")
    } else if(vida>18) {
        console.log("OBRIGATÓRIO")
    } else {
        console.log("OPCIONAL")
    }
}


const ano = Number(promp("Digite o ano de nascimento: "))
votos(ano)