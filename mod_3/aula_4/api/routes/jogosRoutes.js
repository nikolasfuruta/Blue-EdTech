const JogosController = require('../controllers/JogosController')
const {Router} = require('express');
const router = Router()

//DEFINIÇÃO DAS ROTAS
router.get("/listar", JogosController.listarJogos);
router.post("/adicionar", JogosController.adicionarJogo);
router.get("/listar/:id", JogosController.buscaPorId);
router.delete("/deletar/:id", JogosController.deletarJogo);
router.patch("/alterar/:id", JogosController.alterarJogo);


module.exports = router