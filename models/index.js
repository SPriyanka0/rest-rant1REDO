//useNewUrlParser and useUnifiedTopology are optional, but will remove some warning messages from your terminal
//connecting to mongoose 
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
