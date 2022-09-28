// The user will navigate here by clicking a link or button that reads Add a New Place
// that will be accessed via a GET route to the path /places/new, where they will see the view we are about to create.

const React = require('react')
const Def = require('../default')

function new_form(data) {
    let message = ''                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                {/* forms have two crucial attributes: method (the HTTP verb) and action (the destination path). In our case, we want the form data to go to the POST /places route. */}
                <form method="POST" action="/places">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" required />
                        </div>
                        <div className="form-group col-sm-6">
                            {/* Note: JSX requires the class attribute to be written as className. */}
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" name="pic" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label for="founded">Founded Year</label>
                            <input type ="number" className="form-control" id="founded" name="founded" value={new Date().getFullYear} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" id="cuisines"name="cuisines" required />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form
