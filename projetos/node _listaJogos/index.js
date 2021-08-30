//SERVIDOR

//IMPORTAÇÃO
const { json } = require('express');
const express = require('express');
const mongoose = require('./database/config');
const Jogo = require('./model/JogosSchema');


//EXECUÇÃO
const app = express();
app.use(express.json());

//PORTA
const port = 3000;

//ROTAS
//get
app.get('/', (req, res) => {
    res.status(200).json("Hello Mongodb");
});

//getAll
app.get('/jogos', async (req, res) => {
    const jogos = await Jogo.find();
    res.status(200).json(jogos);
});

//getById
app.get('jogos/:id', async (req, res) => {
    const id = req.params.id;

    //verificar o id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(422).json("ID INVÁLIDO");

    } else {
        //realizar a busca no db
        const jogo = await Jogo.findById(id);

        //validar o jogo
        if (!jogo) {
            res.status(404).json("JOGO NÃO ENCONTRADO");

        } else {
            res.status(200).json(jogo);
        }
    }
});

//post
app.post('/jogos', async (req, res) => {
    const jogo = req.body;

    //validar o jogo
    if (!jogo || !jogo.titulo || !jogo.genero || !jogo.console) {
        res.status(400).json("JOGO INVÁLIDO");

    } else {
        const novoJogo = await new Jogo(jogo);
        res.status(200).json(novoJogo);
    }
});

//put
app.put('/jogos/:id', async (req, res) => {
    const id = req.params.id;

    //verificar o id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(422).json("ID INVÁLIDO");

    } else {
        const jogo = await Jogo.findById(id);

        //validar se existe o jogo
        if (!jogo) {
            res.status(404).json("JOGO NÃO ENCONTRADO");

        } else {
            const novoJogo = req.body;
            //validar o jogo
            if (!jogo || !jogo.titulo || !jogo.genero || !jogo.console) {
                res.status(400).json("JOGO INVÁLIDO");

            } else {
                //alteração no db
                await Jogo.findOneAndUpdate({_id:id},novoJogo);
                const jogoatualizado = await Jogo.findById(id);
                res.status(200).json(jogoatualizado);
            }
        }
    }
});

//delete
app.delete('/jogos/:id', async (req,res) => {
    const id = req.params.id;

    //verificar o id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(422).json("ID INVÁLIDO");

    } else {
        const jogo = await Jogo.findById(id);

        //validar se existe o jogo
        if (!jogo) {
            res.status(404).json("JOGO NÃO ENCONTRADO");

        } else {
            await Jogo.findByIdAndDelete(id);
            res.status(200).json("JOGO EXCLUÍDO COM SUCESSO");
        }
    }
});

//SAÍDA
app.listen(port, () => {
    console.log(`Servidor redando na Porta ${port}`);
});