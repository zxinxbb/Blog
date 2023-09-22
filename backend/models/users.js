const mongoose = require('mongoose')

// get schema from mongoose object

const Schema = mongoose.Schema

// what the data will look like

const userSchema = new Schema({
    firstname: {

        type: String,

        required: true

    },
    surname: {

        type: String,

        required: true

    },

    email: {

            type: String,

            required: true

    },
    username: {

        type: String,

        required: true

    },

    password: {

        type: String,

        required: true

    }

})

module.exports = mongoose.model('user', userSchema)