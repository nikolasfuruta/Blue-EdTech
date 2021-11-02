const Filmes = require('../database/filmesSchemas');

class FilmesModels {

    static async listar(){
        return await Filmes.find({})
    }

    static async adicionar(info){
        return await Filmes.create(info)
    }
}

module.exports = FilmesModels