const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const todoShema = new Schema({
    todo: {
        type:  String,
        required: [true, 'empty text!!']
    }
})

module.exports = model('todo', todoShema)