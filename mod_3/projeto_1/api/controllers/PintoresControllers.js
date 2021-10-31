const PintoresModels = require('../models/PintoresModels');

class PintoresController{

    static listar(req,res){
        const result = PintoresModels.listar();
        res.status(200).json({"LISTA DE PINTORES": result});
    }

    static buscarPorId(req,res){
        const id = parseInt(req.params.id);
        const result = PintoresModels.buscarPorId(id);
        if(result){
            res.status(200).json({"BUSCA ESPECÍFICA": result});
        } else{
            res.status(404).json("ID NÃO ENCONTRADO");
        } 
    }

    static adicionar(req,res){
        const info = req.body;
        const result = PintoresModels.adicionar(info);
        if(result){
            res.status(200).json({"PINTOR ADICIONADO": result});
        } else{
            res.status(404).json("INFORMAÇÕES DO PINTOR INCORRETO");
        } 
    }

    static alterar(req,res){
        const id = parseInt(req.params.id)
        const info = req.body;
        const result = PintoresModels.alterar(id,info);
        if(result){
            res.status(200).json("PINTOR ALTERADO");
        } else{
            res.status(404).json("ID NÃO ENCONTRADO OU INFORMAÇÕES DO PINTOR INCORRETAS");
        } 
    }

    static deletar(req,res){
        const id = parseInt(req.params.id);
        const result = PintoresModels.deletar(id);
        if(result){
            res.status(200).json("PINTOR DELETADO");
        } else{
            res.status(404).json("ID NÃO ENCONTRADO");
        } 
    }
}

module.exports = PintoresController