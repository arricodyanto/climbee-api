const user = require('../db/models/user')
const db = require('./../db/models')

const profile = async(req, res, next) => {
    const { id } = req.user
    const user = await db.User.findByPk(id)
    user.password = undefined
    res.json({
        success: true,
        message: 'Success retrieving User Profile',
        data: user
    })
}

const list = async(req, res, next) => {
    const users = await db.User.findAll()
    res.json({
        success: true,
        message: "Success Retrieve All User Data",
        data: users,
    })
}
const update = async(req, res, next) => {
    try {
        const user = req.body
        const updateData = await db.User.update(user, { where: { id: 2 } })
        res.status(201).json({
            success: true,
            message: "Success Updating a user !",
            data: updateData
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async(req, res, next) => {
        try {
            const deleteData = await db.User.destroy({ where: { id: 2 } })
            res.status(201).json({
                success: true,
                message: "Success Deleting a user !",
                data: deleteData
            })
        } catch (error) {
            next(error)
        }
    }
    // // const update = async(req, res, next) => {
    // //     try {
    // //         const user = req.body
    // //         const salt = bcrypt.genSaltSync(saltRounds)
    // //         const hash = bcrypt.hashSync(user.password, salt)
    // //             // const checkPassword = bcrypt.compareSync(users.password, hash)
    // //         user.password = hash
    // //         const insertData = await db.User.create(user)
    // //         insertData.password = undefined
    // //         res.status(201).json({
    // //             // message: "Welcome to Register ! (controller)"
    // //             success: true,
    // //             message: "Success Registering a New User !",
    // //             data: insertData
    // //         })
    // //     } catch (error) {
    // //         if (error.message === 'Validation error') {
    // //             next(ApiError.badRequest("Email or Username has been already used!"))
    // //         } else {
    // //             next(error)
    // //         }
    // //     }
    // // }

// const update = async(req, res, next) => {
//     const { id } = req.user
//     const users = await db.User.update(id, {
//         username: `${req.body.username}`,
//         name: `${req.body.name}`,
//         email: `${req.body.email}`,
//         password: `${req.body.password}`,
//         role: `${req.body.role}`,
//         image: `${req.body.image}`,
//         phone: `${req.body.phone}`,
//         address: `${req.body.address}`,
//         district: `${req.body.district}`,
//         city: `${req.body.city}`,
//         province: `${req.body.province}`,
//         postal_code: `${req.body.postal_code}`
//     })
//     res.json({
//         success: true,
//         message: "Success Update a User",
//         data: users,
//     })

// }

// // app.put('/users/update/:id_account', (req, res) => {
// //     accountModel.findOneAndUpdate({ id_account: req.params.id_account }, {
// //         username: `${req.body.username}`,
// //         email: `${req.body.email}`,
// //         password: `${req.body.password}`,
// //         name: `${req.body.name}`,
// //         img_profile: `${req.body.img_profile}`,
// //         token: `${req.body.token}`,
// //         role: `${req.body.role}`,
// //         phone: `${req.body.phone}`
// //     }, function(err) {
// //         accountModel.find({}, function(err, result) {
// //             res.send(result)
// //         })
// //     })
// // })

module.exports = {
    profile,
    list,
    update,
    destroy
}