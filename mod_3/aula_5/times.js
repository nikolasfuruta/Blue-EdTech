const express = require("express")
const router = express.Router()

const clubes = [
    {
    id: 1,
    nome: "Botafogo"
    },
    {
    id: 2,
    nome: "Corinthians"
    },
    {
    id: 3,
    nome: "Fluminense"
    },
    {
    id: 4,
    nome: "Palmeiras"
    },
    {
    id: 5,
    nome: "São Paulo"
    }
];

router.get("/", (req,res)=>{
    if(!clubes){
        res.status(404).json("FALHA NO CARREGAMENTO DA LISTA")
        return;
    } else {
        res.status(200).json({"LISTA DE CERVEJAS":clubes});
    }
});

router.post("/", (req,res)=>{
    const info = req.body;
    if(!info || !info.id || !info.nome){
        res.status(400).json("ERRO NA INFORMAÇÃO DE CADASTRO");
        return
    } else {
        clubes.push(info)
        res.status(201).json({"CLUBE ADICIONADO": info});
    }
})

router.get("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = clubes.find((item) => {
        if(item.id === id){
            return item
        }
    })

    if(!info){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        res.status(200).json({"RESULTADO": info})
    }
})

router.put("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = req.body
    const novo = clubes.find((item)=>{
        if(item.id === id){
            return item
        }
    })

    if(!novo){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        clubes[id-1] = info
        res.status(200).json({"FILME ALTERADO": clubes[id-1]})
    }
})

router.delete("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = clubes.find((item)=>{
        if(item.id===id){
            return item
        }
    })

    if(!info){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        clubes.pop(id-1)
        res.status(200).json("CLUBE DELETADO")
    }
})

module.exports = router;