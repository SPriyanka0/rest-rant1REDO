const React = require('react')
const Def = require('../default')
//displays information of specific place wwith connected routes
function show(data) {
    return (
        <Def>
            <main>
                <h1>
                    {data.place.name}
                </h1>
                <h3>Description</h3>
                <h3>Rating</h3>
                <p> not rated yet </p>
                <h3>Comments</h3>
                <p> no comment </p>
                {/* href allows us to acess data.id */}
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show
