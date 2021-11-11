const Personagens = require('../models/personagensSchema');

function validarEntrada(req){
    if(!req.body.nome){
        return res.status(400).json({message:"NOME NÃO ENCONTRADO"})
    }else if(!req.body.imagemUrl){
        return res.status(400).json({message:"IMAGEM NÃO ENCONTRADA"})
    }
}

function validarID(id){
    if(id.length != 24){
        res.status(400).json({message:"ID PRECISA TER 24 CARACTERES"})
    }
}

exports.readAll = async (req,res)=>{
    await Personagens.find({})
    .then((personagens)=>{return res.status(200).json(personagens)})
    .catch((err)=>{
        console.err(err.message)
        return res.status(400).json({message:"Algo está errado"})})
}

exports.readSingle = async (req,res)=>{
    const id = req.params.id
    validarID(id)
    await Personagens.findById(id)
    .then((personagem)=>{return res.status(200).json(personagem)})
    .catch((err)=>{
        console.err(err.message)
        return res.status(400).json({message:"Algo está errado"})})
}

exports.create = async (req,res)=>{
    validarEntrada(req.body)
    await Personagens.create(req.body)
    .then(()=>{return res.status(201).json({message:"PERSONAGEM INSERIDO COM SUCESSO"})})
    .catch((err)=>{
        console.err(err.message)})
        return res.status(404).json({message:"Algo está errado"})
}

exports.delete = async (req,res)=>{
    const id = req.params.id
    validarID(id)
    await Personagens.findByIdAndDelete({_id:id})
    .then(()=>{return res.status(200).json({message:"PERSONAGEM DELETADO"})})
    .catch((err)=>{
        console.err(err.message)
        return res.status(404).json({message:"Algo está errado"})})
}

exports.update = async (req,res)=>{
    const id = req.params.id;
    validarID(id)
    validarEntrada(req.body)
    await Personagens.findByIdAndUpdate({"_id":id},req.body)
    .then((personagem)=>{return res.status(200).json(personagem)})
    .catch((err)=>{
        console.err(err)
        return res.status(400).json({message:"Algo está errado"})})
}