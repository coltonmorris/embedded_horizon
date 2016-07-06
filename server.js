/* NOTES
* promising: 
* https://github.com/svenhornberg/stackhorizionexpress
*
*
*fix for the ws error and 400 bad request?
*https://github.com/rethinkdb/horizon/issues/525#issuecomment-222103680
*http://stackoverflow.com/questions/37469900/horizion-connect-to-an-existing-expressjs-app-results-in-400-bad-request
*/
#!/usr/bin/env node
'use strict'

const express = require('express');

//use one of these...
//https://github.com/joshwnj/knowledge/blob/master/horizon-in-node/index.md
const horizon = require('@horizon/server');
const horizon = require('@horizon/client');
let port      = 8282;

const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

const http_server = app.listen(port);

//options is replacement for the .hz/config.toml
const options = { 
  project_name: 'test',
  auth: { token_secret: 'my_super_secret_secret', 
          allow_anonymous: true,
          allow_unauthenticated: true
  }
};

const horizon_server = horizon(http_server, options);




console.log('Listening on port %s.',port);
