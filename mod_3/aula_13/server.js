const express = require('express');
const cors = require('cors');
require('dotenv').config();
const personagensRoutes = require("./routes/personagensRoutes");

const app = express();
app.use(express.json());

const conn = require('./models/conn');
conn();

app.use(cors());
app.options("*", cors());

app.set('port', process.env.PORT);

app.use("/personagens", personagensRoutes)

// app.get('/', (req,res)=>{
//     res.status(200).json({message:"API OK"})
// })

app.listen(app.get('port'), ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${app.get('port')}`)
});
