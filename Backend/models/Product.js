const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    range:{
        type: String,
        required: true,
    },
    topSpeed:{
        type: String,
        required: true,
    },
    speedrange:{
        type: String,
        required: true,
    },
    timerange:{
        type: String,
        required: true,
    },
    speedrange2:{
        type: String,
        required: true,
    },
    timerange2:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    aboutcar:{
        type: String,
        required: true,
    },
    aboutcar2:{
        type: String,
        required: true,
    },
    modes:{
        type: String,
        required: true,
    },
    chargetime:{
        type: String,
        required: true,
    },
    power:{
        type: String,
        required: true,
    },
    weight:{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('product',ProductSchema)