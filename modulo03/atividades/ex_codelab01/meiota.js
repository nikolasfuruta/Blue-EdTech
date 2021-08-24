/*MEIOTA*/

/*11-Faça um programa que pergunte ao usuário um número
e valide se o numero é par ou impar:

Crie uma variável para receber o valor, com conversão
para int;
Para um número ser par, a divisão dele por 2 tem que
dar resto 0*/

// const input = require("prompt-sync")();
// const num = parseInt(input("Digite um valor: "));
// const ePar = (num%2==0);
// if (ePar){
//     console.log(`O número ${num} é PAR`);
// } else {
//     console.log(`O número ${num} é IMPAR`);
// }


/*12-Faça um script que peça um valor e mostre na
tela se o valor é positivo ou negativo e implemente
a funcionalidade de não aceitar o número 0, no prompt.*/

// const input = require("prompt-sync")();
// var num = input("Digite um valor: ");
// var validate = isNaN(num/0);
// while(validate){
//     var num = input("Digite um valor: ");
//     var validate = isNaN(num/0);
// }
// if (num > 0){
//     console.log(`${num} é POSITIVO`);
// } else {
//     console.log(`${num} é NEGATIVO`);
// }


/*13-Faça um programa que peça dois números, imprima o maior
deles ou imprima "Numeros iguais" se os números forem iguais.*/

// const input = require("prompt-sync")();
// var num1 = input("Digite um valor: ");
// var num2 = input("Digite um valor: ");
// if (num1>num2){
//     console.log(`${num1} é maior`);
// } else if (num2>num1){
//     console.log(`${num2} é maior`);
// } else {
//     console.log(`${num1} e ${num2} são iguais`);
// }


/*14-Crie um programa em JavaScript que peça a nota do aluno,
que deve ser um number entre 0.00 e 10.0

Se a nota for menor que 6.0, deve exibir a nota F.
Se a nota for de 6.0 até 7.0, deve exibir a nota D.
Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.*/

// const input = require("prompt-sync")();
// var nota = input("Digite um valor: ");
// if (nota < 6.0){
//     console.log(`Nota F`);
// } else if (nota >= 6.0 && nota < 7.0){
//     console.log(`Nota D`);
// } else if (nota >= 7.0 && nota < 8.0){
//     console.log(`Nota C`);
// } else if (nota >= 8.0 && nota < 9.0){
//     console.log(`Nota B`);
// } else if (nota >= 9.0 && nota <= 10.0){
//     console.log(`Nota A`);
// } 


/*15-Reajuste salarial: As empresas @.com resolveram dar um
aumento de salário aos seus colaboradores e lhe contrataram
para desenvolver o programa que calculará os reajustes.Faça
um programa que recebe o salário de um colaborador e o reajuste
segundo o seguinte critério, baseado no salário atual:

-salários até R$ 280,00 (incluindo) : aumento de 20%
-salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
-salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
-salários de R$ 1500,00 em diante : aumento de 5%
-Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.*/

// const input = require("prompt-sync")();
// const sal = input("Digite o salário: ");
// var novoSal = 0;
// var per = 0;
// if (sal <= 280){
//     per = 20;
//     novoSal = sal*1.2;
// } else if (sal>280 && sal<=700){
//     per = 15;
//     novoSal = sal*1.15;
// } else if (sal>700 && sal<=1500){
//     per = 10;
//     novoSal = sal*1.1;
// } else if (sal>1500){
//     per = 5;
//     novoSal = sal*1.05;
// }
// console.log(`Salário antes do reajuste: ${sal}`);
// console.log(`Percentual de aumento aplicado: ${per}%`);
// console.log(`Salário depois do reajuste: ${Math.round(novoSal)}`);


/*16-Crie um programa onde o usuário possa digitar vários
valores numéricos e cadastre-os em uma lista. Caso o número
já esteja lá dentro, ele não será adicionado. No final, serão
exibidos todos os valores únicos digitados, em ordem crescente.*/


// const input = require("prompt-sync")();
// var lista = [];

// while(true){
//     var num = input("Digite o valor: ");
//     if (lista.find(elem => num == elem )){
//         break;
//     } else {
//         lista.push(num);
//     }
// }
// const resp = lista.sort((a,b)=>a-b);
// console.log(resp);

/*17-Utilizando laço imprima a tabuada do 8 na tela.*/
// var n = 1;
// var mult;
// while(n<11){
//     mult = n*8;
//     console.log(`8 X ${n} = ${mult}`)
//     n += 1;
// }


/*18-Agora imprima todas as tabuadas do número 1 ao 10.*/
// var n = 1;
// var mult;
// while(n<=10){
//     for(k=1;k<11;k++){
//         mult = n*k;
//         console.log(`${n} X ${k} = ${mult}`);
//     }
//     n += 1;
//     console.log("\n");
// }
