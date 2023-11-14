const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    image: {
        type: String,
        required: [true, "The img is required"]
    }

})


module.exports = mongoose.model('Category', CategorySchema)