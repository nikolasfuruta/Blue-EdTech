const EscultoresController = require("../controllers/EscultoresControllers")

const {Router} = require("express")
const router = Router()

router.get('/listar', EscultoresController.listar)
router.get('/listar/:id', EscultoresController.buscarPorId)
router.post('/adicionar', EscultoresController.adicionar)
router.put('/alterar/:id', EscultoresController.alterar)
router.delete('/deletar/:id', EscultoresController.deletar)

module.exports = router