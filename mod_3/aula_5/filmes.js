const express = require("express")
const router = express.Router()

const filmes = [
    {
    id: 1,
    nome: "Capitão América: O primeiro vingador",
    imagemUrl: "https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw",
    },
    {
    id: 2,
    nome: "Capitã Marvel",
    imagemUrl: "https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
    },
];

router.get("/", (req,res)=>{
    if(!filmes){
        res.status(404).json("FALHA NO CARREGAMENTO DA LISTA")
        return;
    } else {
        res.status(200).json({"LISTA DE FILMES":filmes});
    }
});

router.post("/", (req,res)=>{
    const info = req.body;
    if(!info || !info.id || !info.nome){
        res.status(400).json("ERRO NA INFORMAÇÃO DE CADASTRO");
        return
    } else {
        filmes.push(info)
        res.status(201).json({"FILME ADICIONADO": info});
    }
})

router.get("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = filmes.find((filme) => {
        if(filme.id === id){
            return filme
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
    const novo = filmes.find((filme)=>{
        if(filme.id === id){
            return filme
        }
    })

    if(!novo){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        filmes[id-1] = info
        res.status(200).json({"FILME ALTERADO": filmes[id-1]})
    }
})

router.delete("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const info = filmes.find((filme)=>{
        if(filme.id===id){
            return filme
        }
    })

    if(!info){
        res.status(404).json("ID NÃO ENCONTRADO")
    } else {
        filmes.pop(id-1)
        res.status(200).json("FILME DELETADO")
    }
})

module.exports = router;