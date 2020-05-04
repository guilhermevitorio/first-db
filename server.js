const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


//starting app

const app = express()

//starting DB

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true,
 useUnifiedTopology: true })

 requireDir('./src/models/')

//route

app.use('/api', require('./src/routes'))
app.listen(3001)