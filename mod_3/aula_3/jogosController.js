let listaJogos = []

module.exports = (app) => {
    app.get("/listarjogos", (req,res)=>{
        res.status(200).json(listaJogos)
    });
    
    app.get("/listarjogos/:id", (req,res)=>{
        const id = Number(req.params.id)
        res.status(200).json(listaJogos[(id-1)])
    });
    
    app.post("/criarjogos", (req,res)=>{
        const info = req.body;
        listaJogos.push(info)
        res.status(200).json({"POST CRIADO": info})
    })
    
    app.put("/alterarjogos/:id", (req,res)=>{
        const id = Number(req.params.id)
        info = req.body
        listaJogos[id-1] = info
    
        res.status(200).json({"OBJETO ALTERADO":listaJogos[id-1]})
    })
    
    app.delete("/deletarjogos/:id", (req,res)=>{
        const id = Number(req.params.id)
        delete listaJogos[id-1]
        res.status(200).json("OBJETO DELETADO")
    })
}