const product = require('../db/models/product')
const db = require('./../db/models')

const list = async(req, res, next) => {
    const products = await db.Product.findAll()
    res.json({
        success: true,
        message: "Success Retrieve All User Data",
        data: products,
    })
}

const add = async(req, res, next) => {
    try {
        const product = req.body
        const insertData = await db.Product.create(product)
        res.status(201).json({
            // message: "Welcome to Register ! (controller)"
            success: true,
            message: "Success Adding a New Product !",
            data: insertData
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    list,
    add
}