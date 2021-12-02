const productController = require('../controllers/product-controller')
const { authentication, authorization } = require('../middlewares/auth')

const router = require('express').Router()

// router.get('/profile', authentication, authorization("user", "admin"), userController.profile)
router.get('/', authentication, authorization("admin", "user"), productController.list)
router.post('/add', authentication, authorization("admin"), productController.add)
    // router.put('/update', authentication, authorization("admin"), userController.update)
    // router.put('/update/:id', authentication, authorization("admin"), userController.update)

module.exports = router