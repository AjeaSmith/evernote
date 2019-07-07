const mongoose = require('mongoose')
const schema = mongoose.Schema

// create notes schema
const notes = new schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type:String,
        required: true
    },
    image: {
        type: String
    },
    userCreator: {
        type: schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Notes", notes)