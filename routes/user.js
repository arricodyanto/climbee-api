const userController = require('../controllers/user-controller')
const { authentication, authorization } = require('../middlewares/auth')

const router = require('express').Router()

// router.get('/profile', authentication, (req, res) => {
//         res.json({
//             success: true,
//             message: "Welcome to profile!"
//         })
//     })
router.get('/profile', authentication, authorization("user", "admin"), userController.profile)
router.get('/', authentication, authorization("admin"), userController.list)
router.put('/update', authentication, authorization("admin"), userController.update)
router.delete('/delete', authentication, authorization("admin"), userController.destroy)

module.exports = router