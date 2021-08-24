const express = require('express');//"require" == equivale a import
const app = express();
const port = 3000;
app.use(express.json()); // converte as requisições em json


const filmes = [
    {
        id: 1,
        nome: 'Capitão América',
        duracao: 160,
    },
    {
        id: 2,
        nome: 'Capitã Marvel',
        duracao: 200
    },
];

//CRUD - Create[POST] - Read[GET] - Update[PUT] - Delete[DELETE]

//GET - HOME
//app.get([rota],[callback])
app.get('/', (req, res) => {//request,response
    res.status(200).send('Listas de Filmes!');//"send" == enviar()
});

//(READ) - /filmes -> retorna alista de filmes
app.get('/filmes', (req, res) => {
    //res.send({listaFilmes:filmes});
    res.json({ filmes });
});

//(READ) - /filmes/{id} -> retorna alista de filmes pelo id
app.get("/filmes/:id", (req, res) => {
    const id = +req.params.id; //"req.params" == request.form[]
    const filme = filmes.find(filme=>filme.id===id);

    !filme ? res.status(404).send({error:"filme não existe"}) : res.json({filme});
});


//(CREATE) - /filmes -> criar um novo filme
app.post("/filmes", (req, res) => {
    const filme = req.body;
    
    if(!filme || !filme.nome || !filme.duracao) {
        res.status(400).send({error:"Filme inválido"});
    }
    

    const ultimoFilme = filmes[filmes.length-1];
    if(filmes.length){
        filme.id = ultimoFilme.id+1;
        filmes.push(filme);
    } else {
        filme.id = 1;
        filmes.push(filme);
    }
    res.status(201).send(filme);
});


//(UPDATE) - /filmes/{id} -> altera o filme pelo id
app.put("/filmes/:id", (req, res) => {
    const id = req.params.id - 1; //pega a info da url
    const filme = req.body.novoFilme; //pega a info do body (info nova que o usuario vai digitar)
    filme[id] = filme;
    res.send("Filme alterado com sucesso!");
});


//(DELETE)
app.delete("/filmes/id", (req, res) => {
    const id = req.params.id - 1;
    delete filmes[id];
    res.send("Filme apagdo com sucesso!");
});


//"listen" -> serve para ligar o backend
//obrigatório estar no FINAL do código
app.listen(port, () => {
    console.log(`Servidor rodando em http//:localhost:${port}`);
}); //sempre último
