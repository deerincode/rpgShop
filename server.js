require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const port = 3000
const Items = require('./models/items.js')

// Global config
db = mongoose.connection

app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
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



app.get('/', (req, res) =>{
    res.render('Home')
})

// Index
app.get('/products', (req, res) => {
    Items.find({}, (error, allItems) =>{
        res.render('Index', {item: allItems})
    })
})

// New
app.get('/products/new', (req,res) =>{
    res.render('New')
})

// Delete
app.delete('/products/:id', (req, res) =>{
    Items.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/products')
    })
})

// Update
app.put('/products/:id', (req, res) =>{
    Items.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) =>{
        res.redirect(`/products/${req.params.id}`)
    })
})

// Create
app.post('/products', (req, res) =>{
    console.log(req.body)
    Items.create(req.body, (error, createdItem) =>{
        res.redirect('/products')
    })
})

// Edit
app.get('/products/:id/edit', (req, res) => {
    Items.findById(req.params.id, (err, foundItem)=>{
        
            res.render(
                'Edit',
                {
                    item: foundItem
                }
            )
        }
    )
})

// Show
app.get('/products/:id', (req, res) =>{
    Items.findById(req.params.id, (err, foundItem) =>{
        console.log(foundItem)
        res.render('Show', {
            item: foundItem,
        })
    })
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})