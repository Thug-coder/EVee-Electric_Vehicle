const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userid:{
        type : String,
        requried: true,
    },
    amount:{
        type : String,
        requried: true,
    },
    address:{
        type:String,
        required:true,
    },
    paymentid:{
        type:String,
        required:true,
    },
    productid:{
        type:String,
        required:true,
    },
    productname:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('order',OrderSchema)