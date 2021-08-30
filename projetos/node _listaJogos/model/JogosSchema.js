//IMPORTAÇÃO
const mongoose = require('../database/config');

//CONFIGURAÇÃO DO SCHEMA
const JogoSchema = new mongoose.Schema(
    {
        titulo:{type:String, require:true},
        genero:{type:String, require:true},
        console:{type:String, require:true}
    }
);

//TRANSFORMANDO EM MODELO
const Jogo = mongoose.model("Jogo",JogoSchema);

//EXPORTAR
module.exports = Jogo;