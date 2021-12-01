/* eslint-disable prettier/prettier */
export class FilmeModule {
    id:number;
    nome:string;
    urlImagem:string

    constructor(id:number, nome:string, urlImagem:string){
        this.id = id;
        this.nome = nome;
        this.urlImagem = urlImagem;
    }
};