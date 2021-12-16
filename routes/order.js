const orderController = require('../controllers/order-controller')
const { authentication, authorization } = require('../middlewares/auth')

const router = require('express').Router()

router.get('/', authentication, authorization("admin", "user"), orderController.list)
router.post('/add', authentication, authorization("admin", "user"), orderController.add)
router.put('/update', authentication, authorization("admin"), orderController.update)
router.delete('/delete', authentication, authorization("admin"), orderController.destroy)
    // router.put('/update', authentication, authorization("admin"), userController.update)
    // router.put('/update/:id', authentication, authorization("admin"), userController.update)

module.exports = router