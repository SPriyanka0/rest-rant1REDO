const React = require('react')
//Create a stub function called Def that has one parameter called html as you see in the code snippet below.
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  
//Export the Def function you just created.
module.exports = Def
