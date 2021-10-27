/*Crie um programa onde o usuário possa digitar
vários valores numéricos e cadastre-os em uma lista.
Caso o número já esteja lá dentro, ele não será
adicionado. No final, serão exibidos todos os valores
únicos digitados, em ordem crescente.*/

const promp = require('prompt-sync')();

const adicionar = ()=>{
    const lista = [];
    while(true){
        let num = Number(promp("Digite o valor: "))

        if(!lista.includes(num)){
            lista.push(num)
        }

        let cont = promp("Deseja continuar? [s/n] ");
        while(!['s','n'].includes(cont)){
            cont = promp("Deseja continuar? [s/n] ");
        }
        
        if(cont == 'n'){
            break;
        }
    }
    
    lista.sort()
    lista.forEach(i => {
        console.log(i)
    })
    
}

adicionar();