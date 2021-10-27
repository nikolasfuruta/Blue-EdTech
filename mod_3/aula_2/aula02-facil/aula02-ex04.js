const promp = require('prompt-sync')();

const menu = () => {

    const opcoes = ['1-feijoada','2-churrasco','3-lasanha','4-bobó','5-caldo']
    opcoes.map(n=>console.log(n));

    let escolha = promp("Digite o n° da sua opção: ")

    while(![1,2,3,4,5].includes(Number(escolha))){
        escolha = promp("Digite o n° da sua opção: ")
    }

    switch(escolha){
        case '1':
            console.log("OPÇÃO ESCOLHIDA: FEIJOADA");
            break;
        case '2':
            console.log("OPÇÃO ESCOLHIDA: CHURRASCO");
            break;
        case '3':
            console.log("OPÇÃO ESCOLHIDA: LASANHA");
            break;
        case '4':
            console.log("OPÇÃO ESCOLHIDA: BOBÓ");
            break;
        case '5':
            console.log("OPÇÃO ESCOLHIDA: CALDO");
            break;
    }
}

menu()