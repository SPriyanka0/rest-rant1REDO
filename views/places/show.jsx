const React = require('react')
const Def = require('../default')
//displays information of specific place wwith connected routes



function show(data) {
   let comments = (
    <h3 className="inactive">No comments yt!</h3>
   )
   let rating = (
    <h3 className="inactive">
      No ratings yet!
    </h3>
   )
   if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += 'â­ï¸'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
  }
  
  
    return (
      <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
              {rating}
            <br />
            <h2>Description</h2>
            <h4>Serving: {data.place.cuisines}</h4>
          <br />
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>{" "}
          {` `}
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
          </div>
        </div>
      </main>
    </Def>
    )
}

module.exports = show


