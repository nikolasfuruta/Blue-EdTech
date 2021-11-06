const FilmesModels = require('../models/FilmesModels');

class FilmesControllers{

    static async listar(req,res){
        try{
            const result = await FilmesModels.listar()
            return res.status(200).json(result)
        } catch(err){
            console.error(err.message)
            return res.status(404).json("ERRO AO LISTAR FILMES")
        }
    }

    static async adicionar(req,res){
        //validações
        if(!req.body.nome){
            res.status(400).json({message: "FALTANDO O CAMPO NOME"});
            return;
        } else if(!req.body.imagemUrl){
            res.status(400).json({message: "FALTANDO O CAMPO IMAGEM"});
            return;
        }

        try{
            const result = await FilmesModels.adicionar(req.body)
            return res.status(200).json(result)
        } catch(err){
            console.error(err.message)
            return res.status(404).json("ERRO AO ADICIONAR FILME")
        }
    }

    static async alterar(req,res){
        const id = req.params.id
        const info = req.body

        //validações
        if(!id){
            res.status(400).json({message: "FALTANDO O CAMPO ID"});
            return;
        } else if(!req.body.nome){
            res.status(400).json({message: "FALTANDO O CAMPO NOME"});
            return;
        } else if(!req.body.imagemUrl){
            res.status(400).json({message: "FALTANDO O CAMPO IMAGEM"});
            return;
        }
        
        try{
            await FilmesModels.alterar(id,info)
            return res.status(200).json("FILME ALTERADO")
        } catch(err){
            console.error(err.message)
            return res.status(404).json("ERRO AO ALTERAR FILMES")
        }
    }

    static async deletar(req,res){
        if(req.params.id.length==24){
            try{
                await FilmesModels.deletar(req.params.id)
                return res.status(200).json("FILME DELETADO")
            } catch(err){
                console.error(err.message)
                return res.status(404).json("ERRO AO LISTAR FILMES")
            }
        } else{
            return res.status(400).json("ID INCORRETO")
        }
        
    }
}

module.exports = FilmesControllers