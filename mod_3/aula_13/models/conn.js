const mongoose = require("mongoose");
const { config } = require("dotenv");

module.exports = () => {
    config()

    PORT = 3000
    const db_user = process.env.DB_USER
    const db_pwd = process.env.DB_PWD
    const db_host = process.env.DB_HOST
    const db_db = process.env.DB_DB 

    const connectionString = `mongodb+srv://${db_user}:${db_pwd}@${db_host}/${db_db}`;
    mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("CONECTADO AO MONGODB");
        })
        .catch((err) => {
            console.error({ "FALHA AO CONECTAR NO MONGODB": err.message });
        });
};
