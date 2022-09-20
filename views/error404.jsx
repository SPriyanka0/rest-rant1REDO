const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                {/* image using link temporarily due to not proper load */}
                  <img src="https://images.unsplash.com/photo-1560343787-b90cb337028e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="panda" />
                  {/* Ningyu He / https://unsplash.com/@hnyuuu */}
                </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

