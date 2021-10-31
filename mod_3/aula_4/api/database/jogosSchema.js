const mongoose = require("../config/dataConfig");

//CONFIGURAÇÃO DAS COLLECTIONS
const Schema = mongoose.Schema
const ListaJogosSchema = new Schema({
    titulo:{type:String, required:true},
    genero:{type:String, required:true},
    console:{type:String, required:true}
});

module.exports = mongoose.model("listaJogos", ListaJogosSchema);
