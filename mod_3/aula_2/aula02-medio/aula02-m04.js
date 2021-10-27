/*Crie um programa em JavaScript que peça a nota do
aluno, que deve ser um number entre 0.00 e 10.0.
-Se a nota for menor que 6.0, deve exibir a nota F.
-Se a nota for de 6.0 até 7.0, deve exibir a nota D.
-Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
-Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
-Se for entre 9.0 e 10.0, deve exibir um belo de um A.
*/
const promp = require('prompt-sync')();

const qualANota = () => {
    let nota = Number(promp("Digite o valor: "));

    while(!(nota>=0 && nota<=10)){
        nota = Number(promp("Digite o valor: "));
    }

    if(nota>=9){
        console.log("O ALUNO TIROU 'A'");
    } else if(nota>=8 && nota<9) {
        console.log("O ALUNO TIROU 'B'");
    } else if(nota>=7 && nota<8){
        console.log("O ALUNO TIROU 'C'");
    } else if(nota>=6 && nota<7) {
        console.log("O ALUNO TIROU 'D'");
    } else {
        console.log("O ALUNO TIROU 'F'");
    }
}

qualANota();