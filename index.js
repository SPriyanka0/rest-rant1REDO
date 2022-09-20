require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Routes

app.use('/places', require('./controllers/places'))
//default local host to home page
app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})
//sending data to be received by our back-end code
app.use(express.urlencoded({ extended: true }))

//listen for connections
app.listen(process.env.PORT)

