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

  // render new show page
  res.render('places/index', { places }) 
  })
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      //passes data to vieww
      res.render('places/show' , { place: places[id]})
    }
  })
  

module.exports = router
