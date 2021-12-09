const order = require('../db/models/order')
const db = require('./../db/models')

const list = async(req, res, next) => {
    const orders = await db.Order.findAll()
    res.json({
        success: true,
        message: "Success Retrieve All Order Data",
        data: orders,
    })
}

const add = async(req, res, next) => {
    try {
        const order = req.body
        const insertData = await db.Order.create(order)
        res.status(201).json({
            success: true,
            message: "Success Adding a New Order !",
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