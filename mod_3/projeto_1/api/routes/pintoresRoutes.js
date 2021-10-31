const PintoresController = require("../controllers/PintoresControllers")

const {Router} = require("express")
const router = Router()

router.get('/listar', PintoresController.listar)
router.get('/listar/:id', PintoresController.buscarPorId)
router.post('/adicionar', PintoresController.adicionar)
router.put('/alterar/:id', PintoresController.alterar)
router.delete('/deletar/:id', PintoresController.deletar)

module.exports = router