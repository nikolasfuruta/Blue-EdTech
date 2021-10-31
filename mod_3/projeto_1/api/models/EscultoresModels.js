const listaEscultores = require('../database/listaEscultores');

class EscultoresModels{

    static listar(){
        return listaEscultores
    }

    static buscarPorId(id){
        return listaEscultores.find((item) => {
            if(item.id===id){
                return item;
            } else {
                return false;
            }
        });
    }

    static adicionar(info){
        if(!info||!info.id||!info.nome||!info.nascimento||!info.genero||!info.obra){
            return false;
        } else {
            listaEscultores.push(info);
            return listaEscultores;
        }
    }

    static alterar(id,info){
        return listaEscultores.find((item) => {
            if(item.id!==id){
                return false;
            } else {
                if(!info||!info.id||!info.nome||!info.nascimento||!info.genero||!info.obra){
                    return false;
                } else{
                    listaEscultores[id] = info;
                    return true;
                }
            }
        });
    }

    static deletar(id){
        return listaEscultores.find((item) => {
            if(item.id!==id){
                return false;
            } else {
                listaEscultores.pop(id);
                return true;
            }
        });
    }
}

module.exports =  EscultoresModels