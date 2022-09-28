//require the dotenv package == to ensure
//we can use the value of the MONGO_URI environment variable.
require('dotenv').config()
//useNewUrlParser and useUnifiedTopology are optional, but will remove some warning messages from your terminal
//connecting to mongoose 
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
