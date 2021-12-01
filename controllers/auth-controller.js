const bcrypt = require('bcrypt')
const ApiError = require('../helpers/api-error')
const authJwt = require('../helpers/auth-jwt')
const saltRounds = 10
const db = require('./../db/models')

const register = async(req, res, next) => {
    try {
        const user = req.body
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(user.password, salt)
            // const checkPassword = bcrypt.compareSync(users.password, hash)
        user.password = hash
        const insertData = await db.User.create(user)
        insertData.password = undefined
        res.status(201).json({
            // message: "Welcome to Register ! (controller)"
            success: true,
            message: "Success Registering a New User !",
            data: insertData
        })
    } catch (error) {
        if (error.message === 'Validation error') {
            next(ApiError.badRequest("Email or Username has been already used!"))
        } else {
            next(error)
        }
    }
}

const login = async(req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await db.User.findOne({
            where: {
                email,
            },
        })
        if (user) {
            const isPassword = bcrypt.compareSync(password, user.password)
            user.password = undefined
            if (isPassword) {
                const payload = {
                    id: user.id,
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    image: user.image,
                    phone: user.phone,
                    address: user.address,
                    district: user.district,
                    city: user.city,
                    province: user.province,
                    postal_code: user.postal_code
                }
                const token = authJwt.generate(payload)
                return res.json({
                    success: true,
                    message: "Login Success!",
                    data: { user, token },
                })
            } else {
                throw ApiError.badRequest(`The password for the email ${email} is incorrect!`)
            }
        } else {
            throw ApiError.badRequest("Username not found!")
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    register,
    login
}