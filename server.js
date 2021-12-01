const express = require('express')
const errorHandler = require('./middlewares/error-handler')
const app = express()
const port = process.env.PORT || 3000
const routers = require('./routes')
const users = require('./db/models/user')
const db = require('./db/models')
    // const { Sequelize } = require('sequelize');
    // const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`) // Example for postgres


app.use(express.json())
app.use(routers)

app.get('/', async(req, res) => {
    res.json({
            success: true,
            message: "Hello, World!"
        })
        // try {
        //     await sequelize.authenticate();
        //     console.log('Connection has been established successfully.');
        // } catch (error) {
        //     console.error('Unable to connect to the database:', error);
        // }
})

app.put('/users/update/:id', async(req, res) => {
    const id = req.user.id
    const users = await db.User.update(id, {
        username: `${req.body.username}`,
        name: `${req.body.name}`,
        email: `${req.body.email}`,
        password: `${req.body.password}`,
        role: `${req.body.role}`,
        image: `${req.body.image}`,
        phone: `${req.body.phone}`,
        address: `${req.body.address}`,
        district: `${req.body.district}`,
        city: `${req.body.city}`,
        province: `${req.body.province}`,
        postal_code: `${req.body.postal_code}`
    }, function(err) {
        accountModel.find({}, function(err, result) {
            res.send(result)
        })
    })
})

app.use(errorHandler)

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Sorry URL not found!"
    })
})

app.listen(port, () => {
    console.log(`Server app running at http://localhost:${port}`)
})