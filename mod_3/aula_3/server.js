const express = require('express');
const filmesRoute = require("./controller/filmesController");
const jogosRoute = require('./controller/jogosController');
const seriesRoute = require('./controller/seriesController');

//instância express
const app = express();

//definir a porta
const port = 3000;

//definir middlewares
app.use(express.json())
app.use("/filmes", filmesRoute)
app.use("/jogos", jogosRoute)
app.use("/series", seriesRoute)

//subir (uppar) o servidor
app.listen(port, ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`)
})