const joi = require('joi')

const login = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
})

const register = joi.object()

module.exports = {
    login
}