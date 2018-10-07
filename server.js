const prpl = require('prpl-server');
const express = require('express');
const helmet = require('helmet');
const app = express();
const server = require('http').createServer(app);
app.use(helmet());
app.get('/*', prpl.makeHandler('./build/', {
  builds: [
    {name: 'es6-bundled', browserCapabilities: ['es2015']},
    {name: 'es5-bundled', browserCapabilities: []},

  ],
}));
server.listen(3000, '0.0.0.0');
