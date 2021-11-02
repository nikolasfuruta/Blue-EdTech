const mongoose = require("mongoose");
const { config } = require("dotenv");


config()

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_port = process.env.DB_PORT;

const connectionString = `mongodb://${db_user}:${db_port}/${db_name}`;

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
mongoose.connection.on("connected", () => {
    console.log("MONGOOSE CONECTADO");
});
mongoose.connection.on("disconnected", () => {
    console.log("MONGOOSE DESCONECTADO");
});
mongoose.connection.on("error", (err) => {
    console.error({ "FALHA AO CONECTAR NO MONGOOSE": err.message });
});
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("CONEXÃO ENCERRADA PELO USUÁRIO");
        process.exit(0);
    });
});

module.exports = mongoose

