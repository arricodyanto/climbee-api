const router = require('express').Router()
const product = require('./product')
const order = require('./order')
const discount = require('./discount')
const auth = require('./auth')
const user = require('./user')

router.use('/auth', auth)
router.use('/users', user)
router.use('/products', product)
router.use('/orders', order)
router.use('/discounts', discount)

module.exports = router