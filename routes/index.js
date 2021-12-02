const router = require('express').Router()
const product = require('./product')
const auth = require('./auth')
const user = require('./user')

router.use('/auth', auth)
router.use('/users', user)
router.use('/products', product)

module.exports = router