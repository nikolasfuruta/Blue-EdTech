const mongoose = require('mongoose');

const personagensModel = new mongoose.Schema({
    nome:{type:String, required: true},
    imagemUrl:{type:String, required: true},
    dataCriacao: {type:Date, default: Date.now}
});

module.exports = mongoose.model("Personagens", personagensModel)