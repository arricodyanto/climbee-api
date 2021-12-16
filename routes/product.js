const productController = require('../controllers/product-controller')
const { authentication, authorization } = require('../middlewares/auth')

const router = require('express').Router()

router.get('/', authentication, authorization("admin", "user"), productController.list)
router.post('/add', authentication, authorization("admin"), productController.add)
router.put('/update', authentication, authorization("admin"), productController.update)
router.delete('/delete', authentication, authorization("admin"), productController.destroy)

module.exports = router