const mongoose = require('mongoose')

const {Schema} = require('mongoose');


const FrameSchemma = new Schema({

    data: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('data', FrameSchemma);