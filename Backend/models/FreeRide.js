const mongoose = require('mongoose')

const FreeRideSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('freeride',FreeRideSchema)