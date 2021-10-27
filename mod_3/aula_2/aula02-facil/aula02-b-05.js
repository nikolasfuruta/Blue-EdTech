/*Conversor de moedas: Crie um programa que solicite
um um valor em real ao usuário e converta esse valor,
para:
DOLAR EURO LIBRA-ESTERLINA DÓLAR-CANADENSE PESO-ARGENTINO
PESO-CHILENO
Para esse exercício você precisará realizar uma
pesquisa para saber a cotação de cada moeda em real.
Mostrar o resultado no formato U$9999.99
*/

const promp = require('prompt-sync')();



const moedas = {
    "DOLAR":5.79,
    "EURO":6.46,
    "LIBRA-ESTERLINA":7.66,
    "DOLAR-CANADENSE":4.49,
    "PESO-ARGENTINO":0.056,
    "PESO-CHILENO":0.0069
};

const conversor = ()=>{
    const novaMoedas = {}
    const real = promp("Digite um valor em reais: ");
    const valores = Object.values(moedas)
    const nomes = Object.keys(moedas)

    for(let i=0; i< nomes.length;i++){
        novaMoedas[nomes[i]] = (real/valores[i]).toFixed(3)
    }
    imprime(novaMoedas)
}

const imprime = (moedas) => {
    const valores = Object.values(moedas)
    const nomes = Object.keys(moedas)
    for(let i=0; i< nomes.length;i++){
        console.log(`${nomes[i]}:${valores[i]}`)
    }
}

conversor();