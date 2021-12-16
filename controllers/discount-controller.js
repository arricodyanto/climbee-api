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

const update = async(req, res, next) => {
    try {
        const discount = req.body
        const updateData = await db.Discount.update(discount, { where: { id: 2 } })
        res.status(201).json({
            success: true,
            message: "Success Updating a Discount !",
            data: updateData
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async(req, res, next) => {
    try {
        const deleteData = await db.Discount.destroy({ where: { id: 2 } })
        res.status(201).json({
            success: true,
            message: "Success Deleting a Discount !",
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