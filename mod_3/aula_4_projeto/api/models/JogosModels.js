const ListaJogos = require("../database/jogosSchema");

//MÉTODOS DO MODELO PARA ACESSAR A COLLECTION
class JogosModels{

    static async listarJogos(){
        return await ListaJogos.find({});
    }

    static async buscaPorId(id){
        return await ListaJogos.findById({"_id":id});
    }

    static async adicionarJogo(info){
        return await ListaJogos.create(info);
    }

    static async deletarJogo(id){
        return await ListaJogos.findByIdAndRemove({"_id":id});
    }

    static async alterarJogo(id,info){
        return await ListaJogos.findByIdAndUpdate({"_id":id}, info);
        
    }

}

module.exports = JogosModels