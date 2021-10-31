const EscritoresController = require("../controllers/EscritoresControllers")

const {Router} = require("express")
const router = Router()

router.get('/listar', EscritoresController.listar)
router.get('/listar/:id', EscritoresController.buscarPorId)
router.post('/adicionar', EscritoresController.adicionar)
router.put('/alterar/:id', EscritoresController.alterar)
router.delete('/deletar/:id', EscritoresController.deletar)

module.exports = router