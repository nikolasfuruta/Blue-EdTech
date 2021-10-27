/*Escreva um programa que receba dois valores
digitados pelo usuário (utilize o objeto Math para
arredondar o calculo):
-Quantidade de vida de um monstro (entre 10 e 50);
-Valor do ataque do jogador por turno (entre 5 e 10);
Baseado nos valores digitados, exiba a quantidade de
turnos que o jogador irá demorar para conseguir
derrotar o monstro.
-O jogador irá derrotar o monstro
em 8 turnos.*/

const promp = require('prompt-sync')();


const obterVida = () => {
    const vida = Number(promp("Digite a quantidade de vida: "));
    if(/[1-4][0-9]/.test(Number(vida))){
        return Number(vida)
    } else {
        throw new Error("Valor fora das regras do jogo")
    }
}

const obterAtaque = () => {
    const ataque = Number(promp("Digite a quantidade de ataque: "));
    if(/[5-9]/.test(Number(ataque))){
        return Number(ataque)
    } else {
        throw new Error("Valor fora das regras do jogo")
    }
}

const qtdTurno = () => {
    const a = obterVida()
    const b = obterAtaque()

    const turno = Math.round(a/b)
    return turno
}

console.log(`Número de turnos: ${qtdTurno()}`)