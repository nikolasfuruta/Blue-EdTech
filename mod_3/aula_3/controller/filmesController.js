let listaFilmes = require("../models/filmesLista");

module.exports = (app) =>{
    app.get("/listarfilmes", (req,res)=>{
        res.status(200).json(listaFilmes)
    });
    
    app.get("/listarfilmes/:id", (req,res)=>{
        const id = Number(req.params.id)
        res.status(200).json(listaFilmes[(id-1)])
    });
    
    app.post("/criarfilmes", (req,res)=>{
        const info = req.body;
        listaFilmes.push(info)
        res.status(200).json({"POST CRIADO": info})
    })
    
    app.put("/alterarfilmes/:id", (req,res)=>{
        const id = Number(req.params.id)
        info = req.body
        listaFilmes[id-1] = info
    
        res.status(200).json({"OBJETO ALTERADO":listaFilmes[id-1]})
    })
    
    app.delete("/deletarfilmes/:id", (req,res)=>{
        const id = Number(req.params.id)
        delete listaFilmes[id-1]
        res.status(200).json("OBJETO DELETADO")
    })
}