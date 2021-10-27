const prompt = require('prompt-sync')();

const filmes = []
const adicionarFilme = () => {
    while(true){
        let filme = prompt("Digite o nome do filme: ")
        filmes.push(filme);

        let cont = prompt("Deseja continuar? [s/n] ").toLowerCase()
        while(!['s','n'].includes(cont)){
            cont = input("Deseja continuar? [s/n] ").toLowerCase()
        }

        if(cont != "s"){
            break;
        }
    }

    console.log(filmes);
}

adicionarFilme();