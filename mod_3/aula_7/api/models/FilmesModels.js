const Filmes = require('../database/filmesSchemas');

class FilmesModels {

    static async listar(){
        return await Filmes.find({})
    }

    static async adicionar(info){
        return await Filmes.create(info)
    }

    static async alterar(id,info){
        return await Filmes.findByIdAndUpdate({"_id":id}, info)
    }

    static async deletar(id){
        return await Filmes.findByIdAndDelete({"_id":id})
    }
}

module.exports = FilmesModels