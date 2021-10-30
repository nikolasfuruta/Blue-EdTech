const express = require("express")
const router = express.Router()

const cervejas = [
    {
    id: 1,
    nome: "Colorado"
    },
    {
    id: 2,
    nome: "Augustinus"
    },
    {
    id: 3,
    nome: "Barbarella"
    },
    {
    id: 4,
    nome: "Beck's"
    },
    {
    id: 5,
    nome: "Budweiser"
    }
];

router.get("/", (req,res)=>{
    if(!cervejas){
        res.status(404).json("FALHA NO CARREGAMENTO DA LISTA")
        return;
    } else {
        res.status(200).json({"LISTA DE CERVEJAS":cervejas});
    }
});

router.post("/", (req,res)=>{
    const info = req.body;
    if(!info || !info.id || !info.nome){
        res.status(400).json("ERRO NA INFORMAÇÃO DE CADASTRO");
        return
    } else {
        cervejas.push(info)
        res.status(201).json({"CERVEJA ADICIONADO": info});
    }
})

router.get("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = cervejas.find((item) => {
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
    const novo = cervejas.find((item)=>{
        if(item.id === id){
            return item
        }
    })

    if(!novo){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        cervejas[id-1] = info
        res.status(200).json({"FILME ALTERADO": cervejas[id-1]})
    }
})

router.delete("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = cervejas.find((item)=>{
        if(item.id===id){
            return item
        }
    })

    if(!info){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        cervejas.pop(id-1)
        res.status(200).json("CERVEJA DELETADO")
    }
})

module.exports = router;