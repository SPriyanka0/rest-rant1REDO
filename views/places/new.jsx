// The user will navigate here by clicking a link or button that reads Add a New Place
// that will be accessed via a GET route to the path /places/new, where they will see the view we are about to create.

const React = require('react')
const Def = require('../default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {/* form data goes to the POST /places route */}
                <form method="POST" action="/places">
                    <div classname="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input classname="form-control" id="name" name="name" required />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input classname="form-control" id="pic" name="pic" />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="city">City</label>
                        <input classname="form-control" id="city" name="city" />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="state">State</label>
                        <input classname="form-control" id="state" name="state" />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input classname="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <input classname="btn btn-primary" type="submit" value="Add Place" />
                </form>



            </main>
        </Def>
    )
}

module.exports = new_form
