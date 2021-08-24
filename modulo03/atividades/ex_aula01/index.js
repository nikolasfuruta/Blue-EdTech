console.log("Projeto-Detetive");

//definição do input
const prompt = require("prompt-sync")();
const input = require("prompt-sync")();

//definição das variáveis-perguntas
const quest1 = input("Telefonou para a vítima?[s/n] ");
const quest2 = input("Esteve no local do crime?[s/n] ");
const quest3 = input("Mora perto da vítima?[s/n] ");
const quest4 = input("Devia para a vítima?[s/n] ");
const quest5 = input("Já trabalhou com a vítima?[s/n] ");

let positivo = 0;

//condicional das respostas
if (quest1 == 's'){
    positivo = positivo + 1;
};
if (quest2 == 's'){
    positivo = positivo + 1;
};
if (quest3 == 's'){
    positivo = positivo + 1;
};
if (quest4 == 's'){
    positivo = positivo + 1;
};
if (quest5 == 's'){
    positivo = positivo + 1;
};

//condicional para resiltado

if (positivo == 2){
    console.log("A pessoa foi considerada Suspeita.");
} else if (2 < positivo <= 4){
    console.log("A pessoa foi considerada Cúmplice.");
} else if (positivo == 5){
    console.log("A pessoa foi considerada Assassina.");
} else{
    console.log("A pessoa foi considerada Inocente.");
};