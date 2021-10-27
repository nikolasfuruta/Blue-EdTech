/*Qual o valor do troco?
Defina uma variável para o valor de uma compra que
custou R$100,98;
Defina uma variável para o valor que
o cliente pagou R$150,00;
Defina uma variável que calcula o valor do troco e
exiba-o no console com o valor final arredondado.*/

const custo = 100.98;
const pag = 150.00;
const troco = pag-custo;

console.log(`R$ ${Math.round(troco)}`)