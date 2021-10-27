/*criar uma calculadora simples em javascript,
relembrando as funções e explicando como funciona
trabalhar com módulos em Node js.*/

const prompt = require('prompt-sync')();

const a = prompt("Digite o número: ")
const b = prompt("Digite a operação: ")
const c = prompt("Digite o número: ")

const calc = function(a,b,c){
    if(b == '+'){
        return soma(a,c)
    } else if(b == '-'){
        return sub(a,c)
    } else if(b == '*'){
        return mult(a,c)
    } else{
        return div(a,c)
    }
}


const soma = function(a,c){
    return Number(a)+Number(c);
}

const sub = function(a,c){
    return Number(a)-Number(c);
}

const mult = function (a,c){
    return Number(a)*Number(c);
}

const div = function(a,c){
    return Number(a)/Number(c);
}


console.log(calc(a,b,c));