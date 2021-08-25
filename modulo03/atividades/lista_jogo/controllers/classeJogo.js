//CLASSE
class Jogo {
    constructor(id,nome,img){
    this.id = id;
    this.nome = nome;
    this.img = img;
    }
}

//Instâncias
const jogo1 = new Jogo(1,'Mario','link1');
const jogo2 = new Jogo(2,'Zelda','link2');
const jogo3 = new Jogo(3,'Donkey Kong','link3');
const jogo4 = new Jogo(4,'Pac-Man','link4');
const jogo5 = new Jogo(5,'Tetris','link5');
const jogo6 = new Jogo(6,'Last of Us','link6');
const jogo7 = new Jogo(7,'Cyberpunk','link7');
const jogo8 = new Jogo(8,'Ghost of Tsushima','link8');

//LISTA
const jogos = [jogo1,jogo2,jogo3,jogo4,jogo5,jogo6,jogo7,jogo8];

module.exports = jogos;