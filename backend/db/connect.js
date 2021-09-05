const mongoose = require('mongoose')

const connect =(url)=> {
    mongoose.connect(url)
}

module.exports = connect