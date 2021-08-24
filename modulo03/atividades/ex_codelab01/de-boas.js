/*De Boas*/

/*1-Implemente um programa que escreve na tela a frase 
"O primeiro programa a gente nunca esquece!"*/

// console.log("O primeiro programa a gente nunca esquece!");

/*2-Elabore um programa que escreve seu nome completo 
na primeira linha, seu endereço na segunda e o CEP e 
telefone na terceira.*/

// const info = new Array(
//     "Nikolas Furuta",
//     "Rua BLABLABLA",
//     123456
// );

// let cont = 0;
// while (cont < 3){
//     console.log(info[cont]);
//     cont += 1;
// }


/*3-Faça um programa que mostre na tela uma letra de 
música que você gosta (Se você utilizar template 
string o console obedece a quebra de linha).*/

// console.log(`Tô numa boa, tô aqui de novo
//     Daqui não saio, daqui não me movo
//     Tenho certeza, esse é o meu lugar
//     Aha, aha
    
//     Tô numa boa, tô ficando esperto
//     Já não pergunto se isso tudo é certo
//     Uso esse tempo pra recomeçar
//     Aah Aha
    
//     Doeu, doeu, agora não dói
//     Não dói, não dói
//     Chorei, chorei
//     Agora não choro mais
    
//     Toda mágoa que passei
//     É motivo pra comemorar
//     Pois se não sofresse assim
//     Não tinha razões pra cantar
    
//     Ha ha ha ha ha
//     Mas eu tô rindo à toa
//     Não que a vida esteja assim tão boa
//     Mas um sorriso ajuda a melhorar
//     Aha, aha...`);


/*4-Você foi contratado ou contratada por uma escola 
para fazer o sistema de boletim dos alunos.Como primeiro 
passo, escreva um programa que produza a seguinte saída:*/

// for ([expressaoInicial]; [condicao]; [incremento])
//   declaracao

// const nomeAlunos = new Array(
//     "ALINE",
//     "MÁRIO",
//     "SÉRGIO",
//     "SHIRLEY"
// );

// const notaAlunos = new Array(
//     "9.0",
//     "DEZ",
//     "4.5",
//     "7.0"
// );

// console.log(`Aluno (A)  NOTA`);
// console.log("==========  ====");
// for (i=0; i < 4; i++){
//     console.log(`${nomeAlunos[i]}  ${notaAlunos[i]}`);
// }


/*5-Faça um programa de cadastro de clientes que mostre
um menu de opções e permita com que a pessoa escolha 
umas das opções, exibindo qual foi a opção escolhida.*/

// const input = require("prompt-sync")();
// const listaPerguntas = new Array(
//     "1-DIGITE O NOME",
//     "2-DIGITE O ENDEREÇO",
//     "3-DIGITE SUA IDADE"
// ); 
// console.log("CADASTRO: ");
// for(i=0;i<3;i++){
//     console.log(listaPerguntas[i]);
// }
// const escolha = parseInt(input("Digite sua escolha: "));
// if (escolha == 1){
//     var cadastro = input("DIGITE O NOME: ");
// } else if (escolha == 2){
//     var cadastro = input("DIGITE O ENDEREÇO: ");
// } else if (escolha == 3){
//     var cadastro = input("DIGITE SUA IDADE: ");
// }

// console.log(cadastro);


/*6-Escreva um programa que receba dois valores digitados
pelo usuário(Utilize o objeto Math para arredondar o
calculo):

-Quantidade de vida de um monstro (entre 10 e 50);
-Valor do ataque do jogador por turno (entre 5 e 10);
-Baseado nos valores digitados, exiba a quantidade de
turnos que o jogador irá demorar para conseguir 
derrotar o monstro.
-O jogador irá derrotar o monstro em 8 turnos.*/

// const input = require("prompt-sync")();

// const vida = parseFloat(input("Digite a qtd de vida do monstro: "));
// const ataque = parseFloat(input("Digite o valor de ataque do jogador: "));
// const turno = Math.floor(vida/ataque);
// console.log(`O jogador demorará ${turno} turnos.`);


/*7-E os 10% do garçom?

Defina uma variável para o valor de uma refeição que
custou R$ 42,54;
Defina uma variável para o valor da taxa de serviço 
que é de 10%;
Defina uma variável que calcula o valor total da conta
e exiba-o no console com essa formatação: R$ 9999.99. */

// const ref = 42.54;
// const taxa = 0.1;
// const total = Math.fround(ref*(1+taxa));
// console.log(`TOTAL---R$${total}`);


/*8-Qual o valor do troco?

Defina uma variável para o valor de uma compra que
custou R$100,98;
Defina uma variável para o valor que o cliente pagou
R$150,00;
Defina uma variável que calcula o valor do troco e
exiba-o no console com o valor final arredondado. */

// const compra = 100.98;
// const valorPago = 150.00;
// const troco = Math.floor(valorPago-compra);
// console.log(`O troco é de ${troco}`)


/*9-Você está na flor da idade?

Defina uma variável para o valor do ano do nascimento;
Defina uma variável para o valor do ano atual;
Defina uma variável que calcula o valor final da idade
da pessoa;
Exiba uma mensagem final dizendo a idade da pessoa
e a mensagem "Você está na flor da idade".*/

// const input = require("prompt-sync")();
// const anoNasc = parseInt(input("Digite o ano em que nasceu: "));
// const anoAtual = parseInt(input("Digite o ano atual: "));
// const idade = (anoAtual-anoNasc);
// console.log(`Sua idade é de ${idade}, você está na flor da idade!`);


/*10-Conversor de moedas: Crie um programa que
solicite um um valor em real ao usuário e converta
esse valor, para:

DOLAR
EURO
LIBRA ESTERLINA
DÓLAR CANADENSE
PESO ARGENTINO
PESO CHILENO
Para esse exercício você precisará realizar uma
pesquisa para saber a cotação de cada moeda em real.
Mostrar o resultado no formato U$9999.99*/

// const input = require("prompt-sync")();
// const moedas = {
//     "DOLAR":5.30,
//     "EURO":6.20,
//     "LIBRA ESTERLINA":7.28,
//     "DÓLAR CANADENSE":4.19,
//     "PESO ARGENTINO":0.055,
//     "PESO CHILENO":0.054
// };
// const real = input("Digite um valor em real: ");

// for(let [k,v] of Object.entries(moedas)){
//     let valorFinal = (v/real);
//     console.log(`${k} => ${valorFinal}`);
// }
