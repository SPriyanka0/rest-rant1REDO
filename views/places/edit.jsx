const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            {/* same from new.jsx */}
                {/* form data goes to the POST /places route */}
                {/* action - should reference the PUT method to add to data.if when editing  */}
                <form method="POST" action= {`/places/${data.id}?_method=PUT`}>
                    <div classname="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input classname="form-control" id="name" name="name" value = {data.place.name} required />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input classname="form-control" id="pic" name="pic"  />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="city">City</label>
                        <input classname="form-control" id="city" name="city" />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="state">State</label>
                        <input classname="form-control" id="state" name="state"  />
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

module.exports = edit_form
