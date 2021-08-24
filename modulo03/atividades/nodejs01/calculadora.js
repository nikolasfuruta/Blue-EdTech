const nome = "Calculadora Teste";

const soma = (a,b) => a+b;
const sub = (a,b) => a-b;
const mult = (a,b) => a*b;
const div = (a,b) => a/b;


module.exports = {//exports exporta o módulo
    nome,        //sempre vem em último no código
    soma,
    sub,
    mult,
    div
};