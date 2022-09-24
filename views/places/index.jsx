const React = require('react')
const Def = require('../default')

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div classname='col-sm-6'>
        <h2>
          {/* makes each place to a link to href to rwach index */}
          <a href = {`/places/ ${place.id} ` }>
          {place.name}
          </a>
        </h2>
        <p classname="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p classname="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div classname='row'>
          {placesFormatted}
        </div>

      </main>
    </Def>
  )
}

module.exports = index

