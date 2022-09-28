//import React and the Def function we created in the default.jsx

const React = require('react')
const Def = require('./default')
//the Def component that we created in the default.jsx file as a wrapper, then put a little bit of stub home page code inside it
function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="https://images.unsplash.com/photo-1612846213933-916a1f56d859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Indian tea/chai" /> 
                  {/* /images/kadai.jpg */}
                </div>
                <div>
        Photo by <a href="https://unsplash.com/@prachipalwe">Prchi Palwe</a> on <a href="https://unsplash.com/@prachipalwe">Unsplash</a>
      </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

