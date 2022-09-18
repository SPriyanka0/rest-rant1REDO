const router = require('express').Router()
//first route in places.js. We can use the index page 
//(i.e., the GET route 
//that will eventually show a list of all places).
// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/cat.jpg'
  }]
  
      
      res.render('places/index', { places })

  })
  
  

module.exports = router
