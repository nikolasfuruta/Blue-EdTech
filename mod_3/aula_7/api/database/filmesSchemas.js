const mongoose = require('mongoose');


const filmes = new mongoose.Schema({
    nome:{type:String, required:true},
    imagemUrl:{type:String, required:true}
});

module.exports = mongoose.model("Filmes", filmes);