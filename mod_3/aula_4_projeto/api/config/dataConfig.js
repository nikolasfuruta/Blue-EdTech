const mongoose = require('mongoose')

//CONFIGURAÇÃO DO MONGOOSE

//DEFINIR O ENDEREÇO DO BD
const connectionString = "mongodb://localhost:27017/db_jogos"

//CONECTAR O MONGOOSE AO BD
mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//EVENTOS

mongoose.connection.on("connected", ()=>{console.log("CONECTADO AO BD")});
mongoose.connection.on("error", (err)=>{console.log(err.message)});
mongoose.connection.on("disconected", ()=>{console.log("DESCONECTADO DO BD")});
process.on("SIGINT", ()=>{
    mongoose.connection.close(()=>{
        console.log("APLICAÇÃO ENCERRADA PELO USUÁRIO")
        process.exit(0)
    })
});

module.exports = mongoose;

