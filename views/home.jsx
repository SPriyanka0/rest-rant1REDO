//import React and the Def function we created in the default.jsx
module.exports = home

const React = require('react')
const Def = require('./default')
//the Def component that we created in the default.jsx file as a wrapper, then put a little bit of stub home page code inside it
function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/kadai.jpg" alt="Indian kadai dish in copper pot" />
                </div>
                <div>
        Photo by <a href="https://linktr.ee/azmaanbaluch">Azmaan Baluch</a> on <a href="https://unsplash.com/@azmaanbaluch">Unsplash</a>
      </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

