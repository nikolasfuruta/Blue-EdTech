const EscritoresModels = require('../models/EscritoresModels');

class EscritoresController{

    static listar(req,res){
        const result = EscritoresModels.listar();
        res.status(200).json({"Lista de Escritores": result});
    }

    static buscarPorId(req,res){
        const id = parseInt(req.params.id);
        const result = EscritoresModels.buscarPorId(id);
        if(result){
            res.status(200).json({"BUSCA ESPECÍFICA": result});
        } else{
            res.status(404).json("ID NÃO ENCONTRADO");
        } 
    }

    static adicionar(req,res){
        const escritor = req.body;
        const result = EscritoresModels.adicionar(escritor);
        if(result){
            res.status(200).json({"ESCRITOR ADICIONADO": result});
        } else{
            res.status(404).json("INFORMAÇÕES DO ESCRITOR INCORRETO");
        } 
    }

    static alterar(req,res){
        const id = parseInt(req.params.id)
        const escritor = req.body;
        const result = EscritoresModels.alterar(id,escritor);
        if(result){
            res.status(200).json("ESCRITOR ALTERADO");
        } else{
            res.status(404).json("ID NÃO ENCONTRADO OU INFORMAÇÕES DO ESCRITOR INCORRETAS");
        } 
    }

    static deletar(req,res){
        const id = parseInt(req.params.id);
        const result = EscritoresModels.deletar(id);
        if(result){
            res.status(200).json("ESCRITOR DELETADO");
        } else{
            res.status(404).json("ID NÃO ENCONTRADO");
        } 
    }
}

module.exports = EscritoresController