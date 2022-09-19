// The user will navigate here by clicking a link or button that reads Add a New Place
// that will be accessed via a GET route to the path /places/new, where they will see the view we are about to create.

const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
          </main>
        </Def>
    )
}

module.exports = new_form
