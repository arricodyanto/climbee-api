const product = require('../db/models/product')
const db = require('./../db/models')

const list = async(req, res, next) => {
    const products = await db.Product.findAll()
    res.json({
        success: true,
        message: "Success Retrieve All Product Data",
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
const update = async(req, res, next) => {
    try {
        const product = req.body
        const updateData = await db.Product.update(product, { where: { id: 2 } })
        res.status(201).json({
            success: true,
            message: "Success Updating a product !",
            data: updateData
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async(req, res, next) => {
    try {
        const deleteData = await db.Product.destroy({ where: { id: 2 } })
        res.status(201).json({
            success: true,
            message: "Success Deleting a product !",
            data: deleteData
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    list,
    add,
    update,
    destroy
}