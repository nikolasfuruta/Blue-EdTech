let listaFilmes = require("../models/filmesLista");
const {Router} = require('express')
const router = Router()


router.get("/listar", (req,res)=>{
    res.status(200).json(listaFilmes)
});

router.get("/listar/:id", (req,res)=>{
    const id = Number(req.params.id)
    res.status(200).json(listaFilmes[(id-1)])
});

router.post("/criar", (req,res)=>{
    const info = req.body;
    listaFilmes.push(info)
    res.status(200).json({"POST CRIADO": info})
})

router.put("/alterar/:id", (req,res)=>{
    const id = Number(req.params.id)
    info = req.body
    listaFilmes[id-1] = info

    res.status(200).json({"OBJETO ALTERADO":listaFilmes[id-1]})
})

router.delete("/deletar/:id", (req,res)=>{
    const id = Number(req.params.id)
    delete listaFilmes[id-1]
    res.status(200).json("OBJETO DELETADO")
})

module.exports = router
