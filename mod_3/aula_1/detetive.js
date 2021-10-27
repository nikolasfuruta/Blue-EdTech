/*Vamos exercicitar o que vimos até agora com o famoso projeto do detetive:
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As
perguntas são: 1. "Telefonou para a vítima?" 2. "Esteve no local do crime?"
3. "Mora perto da vítima?" 4. "Devia para a vítima?" 5. "Já trabalhou com a
vítima?"
O programa deve no final emitir uma classificação sobre a participação da
pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve
ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como
"Assassino". Caso contrário, ele será classificado como "Inocente".*/

const prompt = require('prompt-sync')()

console.log("Ocorreu um crime na cidade e preciso fazer algumas perguntas para você.");

const p1 = prompt("Você telefonou para a vítima? [s/n] ");
const p2 = prompt("Você Esteve no local do crime? [s/n] ");
const p3 = prompt("Você Mora perto da vítima? [s/n] ");
const p4 = prompt("Você Devia para a vítima? [s/n] ");
const p5 = prompt("Você Já trabalhou com a vítima? [s/n] ");

const resp = [p1,p2,p3,p4,p5]
let result = 0;

resp.forEach(item => {
    if(item == "s"){
        result += 1
    }
});

if(result == 5){
    console.log("você é o assassino");
} else if(result > 2 && result < 5) {
    console.log("você é o cúmplice");
} else if(result == 2) {
    console.log("você é o suspeito");
} else {
    console.log("você é o inocente");
}