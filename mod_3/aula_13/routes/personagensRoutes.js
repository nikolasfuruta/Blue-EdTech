const {Router} = require('express');
const router = Router();
const PersonagemController = require('../controllers/personagensControllers');

// router.get('/', (req,res)=>{
//     res.status(200).json({message:"API OK"})
// })

router.get('/readAll', PersonagemController.readAll);

router.get('/readSingle/:id', PersonagemController.readSingle)

router.post('/create', PersonagemController.create)

router.delete('/delete/:id', PersonagemController.delete)

router.put('/update/:id', PersonagemController.update)

module.exports = router