require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
//sending data to be received by our back-end code
app.use(express.urlencoded({ extended: true }))
//an app.use() statement that specifies _method as the keyword to change methods when we need to
app.use(methodOverride('_method'))

//Routes

app.use('/places', require('./controllers/places'))
//default local host to home page
app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

//listen for connections
app.listen(process.env.PORT)

