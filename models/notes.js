const mongoose = require('mongoose')
const schema = mongoose.Schema

// Create note schema
const notes = new schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    image: {
        type: String
    },
    userCreator: {
        type: schema.Types.ObjectId,
        ref: 'Users'
    }
})

module.exports = mongoose.model('Notes', notes)