/*Você está na flor da idade?
Defina uma variável para o valor do ano do nascimento;
Defina uma variável para o valor do ano atual;
Defina uma variável que calcula o valor final da idade
da pessoa;
Exiba uma mensagem final dizendo a idade da
pessoa e a mensagem "Você está na flor da idade".
*/
const promp = require('prompt-sync')();

const nasc = promp("Digite o ano do nascimento: ");
const atual = promp("Digite o ano atual: ");
const idade = atual-nasc

console.log(`Você está com ${idade} anos e está na flor da idade`)