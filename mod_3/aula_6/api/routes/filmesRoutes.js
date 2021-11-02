const { Router } = require('express');
const router = Router();
const FilmesControllers = require('../controllers/FilmesControllers')

router.get("/listar", FilmesControllers.listar)
router.post("/adicionar", FilmesControllers.adicionar)

module.exports = router;
