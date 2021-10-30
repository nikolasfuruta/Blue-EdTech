const express = require("express")
const router = express.Router()

const bandas = [
    {
    id: 1,
    nome: "Aviões do Forró"
    },
    {
    id: 2,
    nome: "Solteirões do Forró"
    },
    {
    id: 3,
    nome: "Banda Magníficos"
    },
    {
    id: 4,
    nome: "Limão com Mel"
    },
    {
    id: 5,
    nome: "Calcinha Preta"
    }
];

router.get("/", (req,res)=>{
    if(!bandas){
        res.status(404).json("FALHA NO CARREGAMENTO DA LISTA")
        return;
    } else {
        res.status(200).json({"LISTA DE CERVEJAS":bandas});
    }
});

router.post("/", (req,res)=>{
    const info = req.body;
    if(!info || !info.id || !info.nome){
        res.status(400).json("ERRO NA INFORMAÇÃO DE CADASTRO");
        return
    } else {
        bandas.push(info)
        res.status(201).json({"BANDA ADICIONADO": info});
    }
})

router.get("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = bandas.find((item) => {
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
    const novo = bandas.find((item)=>{
        if(item.id === id){
            return item
        }
    })

    if(!novo){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        bandas[id-1] = info
        res.status(200).json({"BANDA ALTERADO": bandas[id-1]})
    }
})

router.delete("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = bandas.find((item)=>{
        if(item.id===id){
            return item
        }
    })

    if(!info){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        bandas.pop(id-1)
        res.status(200).json("BANDA DELETADO")
    }
})

module.exports = router;