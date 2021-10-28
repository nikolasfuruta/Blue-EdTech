let listaSeries = require("../models/seriesLista");

module.exports = (app) => {
    app.get("/listarseries", (req,res)=>{
        res.status(200).json(listaSeries)
    });
    
    app.get("/listarseries/:id", (req,res)=>{
        const id = Number(req.params.id)
        res.status(200).json(listaSeries[(id-1)])
    });
    
    app.post("/criarseries", (req,res)=>{
        const info = req.body;
        listaSeries.push(info)
        res.status(200).json({"POST CRIADO": info})
    })
    
    app.put("/alterarseries/:id", (req,res)=>{
        const id = Number(req.params.id)
        info = req.body
        listaSeries[id-1] = info
    
        res.status(200).json({"OBJETO ALTERADO":listaSeries[id-1]})
    })
    
    app.delete("/deletarseries/:id", (req,res)=>{
        const id = Number(req.params.id)
        delete listaSeries[id-1]
        res.status(200).json("OBJETO DELETADO")
    })
}