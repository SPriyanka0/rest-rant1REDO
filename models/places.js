const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/350/350'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'This is the future!']
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

//custom method showEstablished() so anyone using the method can get a good idea of what it does just from its name
placeSchema.methods.showEstablished = function(){
  //access the properties of a particular schema instance by using the this keyword
  return `$(this.name) has been serving $(this.city), $(this.state) since $(this.founded)`
}
module.exports = mongoose.model('Place', placeSchema)


// module.exports =  [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/thai.png'
//   }, {
//       name: 'Coding Cat Cafe',
//       city: 'Phoenix',
//       state: 'AZ',
//       cuisines: 'Coffee, Bakery',
//       pic: '/images/cat.jpg'
//   }]
  
      
    