const mongoose = require('mongoose')
const schema = mongoose.Schema

// Create note schema
const users = new schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdNotes: [{
        type: schema.Types.ObjectId,
        ref: 'Notes'
    }]
})

module.exports = mongoose.model('Users', users)