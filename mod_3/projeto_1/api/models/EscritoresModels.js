const listaEscritores = require('../database/listaEscritores');

class EscritoresModels{

    static listar(){
        return listaEscritores
    }

    static buscarPorId(id){
        return listaEscritores.find((item) => {
            if(item.id===id){
                return item;
            } else {
                return false;
            }
        });
    }

    static adicionar(escritor){
        if(!escritor||!escritor.id||!escritor.nome||!escritor.nascimento||!escritor.genero||!escritor.obra){
            return false;
        } else {
            listaEscritores.push(escritor);
            return listaEscritores;
        }
    }

    static alterar(id,escritor){
        return listaEscritores.find((item) => {
            if(item.id!==id){
                return false;
            } else {
                if(!escritor||!escritor.id||!escritor.nome||!escritor.nascimento||!escritor.genero||!escritor.obra){
                    return false;
                } else{
                    listaEscritores[id]=escritor;
                    return true;
                }
            }
        });
    }

    static deletar(id){
        return listaEscritores.find((item) => {
            if(item.id!==id){
                return false;
            } else {
                listaEscritores.pop(id);
                return true;
            }
        });
    }
}

module.exports = EscritoresModels