const express = require('express')
const errorHandler = require('./middlewares/error-handler')
const app = express()
const port = process.env.PORT || 3000
const routers = require('./routes')
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