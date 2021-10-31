const listaPintores = require('../database/listaPintores');

class PintoresModels{

    static listar(){
        return listaPintores
    }

    static buscarPorId(id){
        return listaPintores.find((item) => {
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
            listaPintores.push(info);
            return listaPintores;
        }
    }

    static alterar(id,info){
        return listaPintores.find((item) => {
            if(item.id!==id){
                return false;
            } else {
                if(!info||!info.id||!info.nome||!info.nascimento||!info.genero||!info.obra){
                    return false;
                } else{
                    listaPintores[id] = info;
                    return true;
                }
            }
        });
    }

    static deletar(id){
        return listaPintores.find((item) => {
            if(item.id!==id){
                return false;
            } else {
                listaPintores.pop(id);
                return true;
            }
        });
    }
}

module.exports =  PintoresModels