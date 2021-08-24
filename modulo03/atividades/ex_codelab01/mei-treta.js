//MEI TRETA

/*19-Faça um programa que tenha uma função chamada área(),
que receba as dimensões de um terreno retangular (largura e
comprimento) e mostre a área do terreno:*/

// const input = require("prompt-sync")();
// const l = input("Digite a largura: ");
// const c = input("Digite a largura: ");

//DECLARATIVA
// function area(l,c){
//     return l*c;
// }

//EXPRESSIVO
// const area = function(l,c){return l*c}

//ARROW FUNCTION
// const area = (l,c) => l*c;
// console.log(`${area(l,c)}`);

/*20-Faça um programa que tenha uma função chamada
voto() que vai receber como parâmetro o ano de
nascimento de uma pessoa, retornando um valor
literal indicando se uma pessoa tem voto NEGADO,
OPCIONAL ou OBRIGATÓRIO nas eleições:*/

// const input = require("prompt-sync")();

// function podeVotar(anoNasc){
//     if (2021-Number(anoNasc)>=18){
//         return "VOTO OBRIGATÓRIO";
//     } else if(2021-Number(anoNasc)<18 && 2021-Number(anoNasc)>=16){
//         return "VOTO OPCIONAL";
//     } else {
//         return "VOTO NEGADO";
//     }
//  }

// const anoNasc = Number(input("Digite o ano de nascimento: "));
//  console.log(`${podeVotar(anoNasc)}`);



/*21-Jogo da adivinhação: Escreva um programa que
faça o computador “pensar” em um número inteiro
entre 0 e 10 e peça para o usuário tentar descobrir
qual foi o número escolhido pelo computador. O
programa deverá escrever na tela se o usuário venceu
ou perdeu.*/

const input = require("prompt-sync")();
const listaInteiro = [0,1,2,3,4,5,6,7,8,9,10];
const cpu = Math.floor(Math.random() * 10);

function adivinhacao(listaInteiro,cpu){
    let chute = Number(input("Digite um valor inteiro entre 0 e 10: "));
    while(!(listaInteiro.includes(chute))){
        let chute = Number(input("Digite um valor inteiro entre 0 e 10: "));
    }
    if (chute==cpu){
        //break;
    } else {
        console.log("Tente outra vez.\n");
    }
    console.log("Você acertou o número");
}

jogoAdivinhacao(listaInteiro,cpu);