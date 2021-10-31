const EscultoresModels = require('../models/EscultoresModels');

class EscultoresController{

    static listar(req,res){
        const result = EscultoresModels.listar();
        res.status(200).json({"LISTA DE ESCULTORES": result});
    }

    static buscarPorId(req,res){
        const id = parseInt(req.params.id);
        const result = EscultoresModels.buscarPorId(id);
        if(result){
            res.status(200).json({"BUSCA ESPECÍFICA": result});
        } else{
            res.status(404).json("ID NÃO ENCONTRADO");
        } 
    }

    static adicionar(req,res){
        const info = req.body;
        const result = EscultoresModels.adicionar(info);
        if(result){
            res.status(200).json({"ESCULTOR ADICIONADO": result});
        } else{
            res.status(404).json("INFORMAÇÕES DO ESCULTOR INCORRETO");
        } 
    }

    static alterar(req,res){
        const id = parseInt(req.params.id)
        const info = req.body;
        const result = EscultoresModels.alterar(id,info);
        if(result){
            res.status(200).json("ESCULTOR ALTERADO");
        } else{
            res.status(404).json("ID NÃO ENCONTRADO OU INFORMAÇÕES DO ESCULTOR INCORRETAS");
        } 
    }

    static deletar(req,res){
        const id = parseInt(req.params.id);
        const result = EscultoresModels.deletar(id);
        if(result){
            res.status(200).json("ESCULTOR DELETADO");
        } else{
            res.status(404).json("ID NÃO ENCONTRADO");
        } 
    }
}

module.exports = EscultoresController