// Requirements import
const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./config/db')


// Env var
dotenv.config({path: './config/config.env'})

// Connect Database
connectDB()

const app = express()

// Body Parser
app.use(express.json()) 

// Enable Cors
app.use(cors())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
 app.use('/', require('./routes/storeval'))
 app.use('/shellparams', require('./routes/shellParams'))
 app.use('/getfiletime', require('./routes/getFileTime'))
//  app.use('/pycode', require('./routes/pycode'))


const PORT = process.env.PORT || 3000

app.listen(PORT || 3000, () => {console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)})



