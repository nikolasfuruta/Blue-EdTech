/*Reajuste salarial: As empresas @.com resolveram dar
um aumento de salário aos seus colaboradores e lhe
contrataram para desenvolver o programa que calculará
os reajustes.
Faça um programa que recebe o salário de um colaborador
e o reajuste segundo o seguinte critério, baseado no
salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;o percentual de aumento
aplicado;o valor do aumento;o novo salário, após o
aumento.*/

const promp = require('prompt-sync')();

const reajuste = () => {
    const sal = Number(promp("Digite o valor: "))
    let taxa = 0;

    if(sal <= 280){
        taxa = 0.20;
        console.log(definirSal(sal,taxa));
    } else if(sal>280 && sal<=700){
        taxa = 0.15;
        console.log(definirSal(sal,taxa));
    } else if(sal>700 && sal<=1500){
        taxa= 0.10;
        console.log(definirSal(sal,taxa));
    } else if(sal > 1500){
        taxa = 0.05;
        console.log(definirSal(sal,taxa));
    }
}

const definirSal = (sal,taxa)=>{
    return {
        "salarioSemReajuste": `R$${sal}`,
        "percentualAumento" : `${taxa*100}%`,
        "valorAumento" : `R$ ${(sal*taxa).toFixed(2)}`,
        "novoSalario" : `R$${(sal*(1+taxa)).toFixed(2)}`
    }
}

reajuste();