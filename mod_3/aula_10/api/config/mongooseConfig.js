const mongoose = require("mongoose");
const { config } = require("dotenv");


config()

const db_user = process.env.DB_USER
const db_name = process.env.DB_NAME
const db_pwd = process.env.DB_PWD
const db_host = process.env.DB_HOST

const connectionString = `mongodb+srv://${db_user}:${db_pwd}@${db_host}/${db_name}`;

mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
.then(() => {
    console.log("CONECTADO AO MONGODB");
})
.catch((err) => {
    console.error({ "FALHA AO CONECTAR NO MONGODB": err.message });
});

//events
mongoose.connection.on("connected", () => {console.log("MONGOOSE CONECTADO");});
mongoose.connection.on("disconnected", () => {console.log("MONGOOSE DESCONECTADO");});
mongoose.connection.on("error", (err) => {console.error({ "FALHA AO CONECTAR NO MONGOOSE": err.message});});
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("CONEXÃO ENCERRADA PELO USUÁRIO");
        process.exit(0);
    });
});

module.exports = mongoose

