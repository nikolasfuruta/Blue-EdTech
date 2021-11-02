const FilmesModels = require('../models/FilmesModels');

class FilmesControllers{

    static async listar(req,res){
        try{
            const result = await FilmesModels.listar()
            return res.status(200).json(result)
        } catch(err){
            return res.status(404).json(err.message)
        }
    }

    static async adicionar(req,res){
        const info = req.body
        try{
            const result = await FilmesModels.adicionar(info)
            return res.status(200).json(result)
        } catch(err){
            return res.status(404).json(err.message)
        }
    }
}

module.exports = FilmesControllers