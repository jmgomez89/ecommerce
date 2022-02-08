import express from 'express'
import controller from '../controller/carrito.js'

import pago from '../controller/pago.js'

const router = express.Router()

/* Router POST */
router.post('/', controller.postCarrito)

router.get('/feedback', pago.feedback);

//exports
export default router