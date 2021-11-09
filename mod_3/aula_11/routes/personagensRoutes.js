const {Router} = require('express');
const router = Router();
const Personagens = require('../models/personagensSchema');

router.get('/', (req,res)=>{
    res.status(200).json({message:"API OK"})
})

router.get('/readAll', async (req,res)=>{
    await Personagens.find({})
    .then((personagens)=>{res.status(200).json(personagens)})
    .catch((err)=>{
        console.err(err.message)
        res.status(400).json({message:"Algo está errado"})})
})

router.get('/readSingle/:id', async (req,res)=>{
    const id = req.params.id
    await Personagens.findById(id)
    .then((personagem)=>{res.status(200).json(personagem)})
    .catch((err)=>{
        console.err(err.message)
        res.status(400).json({message:"Algo está errado"})})
})

router.post('/create', async (req,res)=>{
    await Personagens.create(req.body)
    .then(()=>{res.status(201).json({message:"PERSONAGEM INSERIDO COM SUCESSO"})})
    .catch((err)=>{console.err(err.message)})
})

router.delete('/delete/:id', async (req,res)=>{
    const id = req.params.id
    await Personagens.findByIdAndDelete({_id:id})
    .then(()=>{res.status(200).json({message:"PERSONAGEM DELETADO"})})
    .catch((err)=>{
        console.err(err.message)
        res.status(404).json({message:"Algo está errado"})})
})

router.put('/update/:id', async (req,res)=>{
    const id = req.params.id;
    const info = req.body;
    await Personagens.findByIdAndUpdate({"_id":id},info)
    .then((personagem)=>{res.status(200).json(personagem)})
    .catch((err)=>{
        console.err(err)
        res.status(400).json({message:"Algo está errado"})})
})

module.exports = router