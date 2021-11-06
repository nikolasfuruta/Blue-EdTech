const { Router } = require('express');
const router = Router();
const FilmesControllers = require('../controllers/FilmesControllers')

router.get("/listar", FilmesControllers.listar)
router.post("/adicionar", FilmesControllers.adicionar)
router.put("/alterar/:id", FilmesControllers.alterar)
router.delete("/deletar/:id", FilmesControllers.deletar)

module.exports = router;
