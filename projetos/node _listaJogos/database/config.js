//IMPORTAÇÃO
const mongoose = require('mongoose');

//CONFIGURANDO O DB
mongoose.connect("mongodb://localhost/db_jogos", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//EXPORTANDO
module.exports = mongoose;