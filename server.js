require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const port = 3000
const Pokemon = require('./models/items.js')

// Global config
db = mongoose.connection

app.use(express.urlencoded({extended: false}))
mongoose.set('strictQuery', true)

// App setup
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

// Mongoose setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  