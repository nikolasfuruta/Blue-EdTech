/*Jogo da adivinhação: Escreva um programa que faça o
computador “pensar” em um número inteiro entre 0 e 10
e peça para o usuário tentar descobrir qual foi o
número escolhido pelo computador. O programa deverá
escrever na tela se o usuário venceu ou perdeu.
*/

const promp = require('prompt-sync')();


const adivinhacao = () => {
    let erros = 0
    const cp = (Math.random().toFixed(1))*10

    while(true){
        const chute = promp("Digite seu chute: ")

        if(chute == cp){
            console.log("ACERTOU!")
            break;
        } else {
            erros += 1
        }
    }
    console.log(`Sua pontuação de erros foi de ${erros}`)
}

adivinhacao()