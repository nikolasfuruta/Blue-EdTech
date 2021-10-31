const JogosModels = require('../models/JogosModels')

//TRABALHANDO COM REQ E RES
class JogosController{

    static async listarJogos(req,res){
        try{
            const lista = await JogosModels.listarJogos()
            return res.status(200).json(lista)
        } catch(err){
            return res.status(500).json({"FALHA NO CARREGAMENTO DA LISTA":err.message})
        }
    }

    static async buscaPorId(req,res){
        const {id} = req.params
        try{
            const jogo = await JogosModels.buscaPorId(id)
            return res.status(200).json(jogo)
        } catch(err){
            return res.status(500).json({"ID NÃO ENCONTRADO":err.message})
        }
    }

    static async adicionarJogo(req,res){
        const info = req.body
        try{
            await JogosModels.adicionarJogo(info)
            return res.status(200).json({"ADICIONADO":info})
        } catch(err){
            return res.status(500).json({"FALHA EM ADICIONAR JOGO":err.message})
        }
    }

    static async deletarJogo(req,res){
        const {id} = req.params
        try{
            await JogosModels.deletarJogo(id)
            const novaLista = await JogosModels.listarJogos()
            return res.status(200).json({"NOVA LISTA": novaLista})
        } catch(err){
            return res.status(500).json({"ID NÃO ENCONTRADO":err.message})
        }
    }

    static async alterarJogo(req,res){
        const {id} = req.params
        const info = req.body
        try{
            await JogosModels.alterarJogo(id,info)
            const jogoAlterado = await JogosModels.buscaPorId(id)
            return res.status(200).json({"JOGO ALTERADO": jogoAlterado})
        } catch(err){
            return res.status(500).json({"ID NÃO ENCONTRADO":err.message})
        }
    }
}

module.exports = JogosController