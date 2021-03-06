const discountController = require('../controllers/discount-controller')
const { authentication, authorization } = require('../middlewares/auth')

const router = require('express').Router()

router.get('/', authentication, authorization("admin", "user"), discountController.list)
router.post('/add', authentication, authorization("admin"), discountController.add)
router.put('/update', authentication, authorization("admin"), discountController.update)
router.delete('/delete', authentication, authorization("admin"), discountController.destroy)
module.exports = router