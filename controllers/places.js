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
    //console.log(req.body)  -- for testing 
    if (!req.body.pic) {
      // Default if fields left blank
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
  

module.exports = router
