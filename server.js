const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


//starting app

const app = express()
app.use(express.json())
app.use(cors())

//starting DB

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true,
 useUnifiedTopology: true })

 requireDir('./src/models/')

//route

app.use('/api', require('./src/routes'))
app.listen(3001)