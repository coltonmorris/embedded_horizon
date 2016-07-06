'use strict'

let express = require('express')

let port = 8080
let app = express()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/login', express.static(__dirname + '/build'))

// redirect to login page by default
app.get('/', function (req, res, next) {
  let query = req.url
  res.redirect('/login'+query)
  return next()
})

module.exports = new Promise((resolve, reject) => { // Good
  app.listen(port, function () {
    console.log('listening on %s', port)
    resolve()
  })
})
