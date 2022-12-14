const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true},
    img: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, required: true},
    stockCount: { type: Number, required: true},
})

const Items = mongoose.model('Items', itemSchema)

module.exports = Items