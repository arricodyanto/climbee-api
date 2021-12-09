const discount = require('../db/models/discount')
const db = require('./../db/models')

const list = async(req, res, next) => {
    const discounts = await db.Discount.findAll()
    res.json({
        success: true,
        message: "Success Retrieve All Discount Data",
        data: discounts,
    })
}

const add = async(req, res, next) => {
    try {
        const discount = req.body
        const insertData = await db.Discount.create(discount)
        res.status(201).json({
            success: true,
            message: "Success Adding a New Discount !",
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