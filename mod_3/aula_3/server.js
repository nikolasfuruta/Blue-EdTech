const express = require('express');
const Filmes = require("./controller/filmesController");
const Jogos = require('./controller/jogosController');
const Series = require('./controller/seriesController');

//instância express
const app = express();

//definir a porta
const port = 3000;

//definir middlewares
app.use(express.json())

//FILMES
Filmes(app)

//JOGOS
Jogos(app)

//SERIES
Series(app)

//subir (uppar) o servidor
app.listen(port, ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`)
})