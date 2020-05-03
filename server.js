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
 
 const Product = mongoose.model('Product')

//first route
app.get('/', (req, res)=> {
    Product.create({
        title: 'react native', 
        description: 'build native apps',
        url: 'https://github.com/facebook/react-native'
    })
    return res.send('Hello')
})

app.listen(3001)