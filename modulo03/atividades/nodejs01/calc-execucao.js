const calc = require("./calculadora");//require importa o módulo
const input = require("prompt-sync")();

console.log(`Olá, seja bem vindo a ${calc.nome}`);

let a = Number(input("Digite o valor: "));
let b = +input("Digite o valor: ");//"+" transforma str->int

console.log(`
QUAL CÁLCULO GOSTARIA DE FAZER?
    [1] - SOMA
    [2] - SUBTRAÇÃO
    [3] - MULTIPLICAÇÃO
    [4] - DIVISÃO
`);

const escolha = Number(input("Digite sua escolha: "));
if (escolha === 1) {
    console.log(`${a}+${b}=${calc.soma(a, b)}`);
} else if (escolha === 2) {
    console.log(`${a}-${b}=${calc.sub(a, b)}`);
} else if (escolha === 3) {
    console.log(`${a}X${b}=${calc.mult(a, b)}`);
} else if (escolha === 4) {
    console.log(`${a}:${b}=${calc.div(a, b)}`);
} else {
    console.log("Opção inválida");
}


