const router = require('express').Router()
//the places variable in the index route now refers to that global variable.
const places = require('../models/places.js')
//first route in places.js. We can use the index page 
//(i.e., the GET route 
//that will eventually show a list of all places).
// GET /places
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  }) 
  res.render('places/index', { places }) 
  })
  
  // let places = [{
  //   name: 'H-Thai-ML',
  //   city: 'Seattle',
  //   state: 'WA',
  //   cuisines: 'Thai, Pan-Asian',
  //   pic: '/images/thai.png'
  // }, {
  //     name: 'Coding Cat Cafe',
  //     city: 'Phoenix',
  //     state: 'AZ',
  //     cuisines: 'Coffee, Bakery',
  //     pic: '/images/cat.jpg'
  // }]
  
      
      


  
  

module.exports = router
