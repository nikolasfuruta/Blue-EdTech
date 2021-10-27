/*Elabore um programa que escreve seu nome completo
na primeira linha, seu endereço na segunda e o CEP e
telefone na terceira.*/

const promp = require('prompt-sync')();
const usuario = {}

const seusDados = () => {
    usuario.nome = promp("Digite seu nome: ")
    usuario.endereco = promp("Digite seu endereço: ")
    usuario.cep = promp("Digite seu cep: ")
    usuario.tel = promp("Digite seu telefone: ")

    imprimirUsuario(usuario)
}

const imprimirUsuario = (usuario) => {
    console.log(`
    Nome: ${usuario.nome}
    Endereço:${usuario.endereco}
    CEP: ${usuario.cep}
    TEL: ${usuario.tel}
    `)
}

seusDados();