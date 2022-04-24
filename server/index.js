require('dotenv').config()
const express = require ('express')
const sequelize = require ('./db')
const cors = require ('cors')
const models = require ('./models/models.js')
const fileUpload = require ('express-fileupload')
const router = require('./routes/index')
const errorHandler = require ('./middleware/ErrorHandlingMiddleware.js')
const path = require ('path')


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

// app.get('/', (req, res) => {
//     res.status(200).json({message: "Ok message!"})    
// })

app.use('/api', router)

// обработка ошибок последний middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log (`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start ()
