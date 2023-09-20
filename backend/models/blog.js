const mongoose = require('mongoose')

 

// get schema from mongoose object

const Schema = mongoose.Schema

// what the data will look like

const blogSchema = new Schema({

    text: {

        type: String,

        required: true

    },

    date: {

        type: Date,
        default:Date.now

        

    },

    image: {

            type: String,

            required: true

    }

})

 

module.exports = mongoose.model('blog', blogSchema)


