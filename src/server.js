'use strict';


const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackCnfig = require('./../webpack.config');
const compiler = webpack(webpackCnfig);

const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const PORT = 3000;

const express = require('express');
const server = express();

server.use(webpackDevMiddleware(compiler, {
  publicPath: webpackCnfig.output.publicPath,
  hot: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false
  }
}));

server.use(webpackHotMiddleware(compiler));

server.set('view engine', 'jade');
server.set('views', __dirname);

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


server.use('/api/data', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data))
  });
});

server.get('/api/channels', (req, res) => {
  fs.readFile(path.join(__dirname, 'channels.json'), (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data))
  });
});

server.post('/api/channels', (req, res) => {
  fs.readFile(path.join(__dirname, 'channels.json'), (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data))
  });
});

server.use('/', (req, res) => (
  res.render('index', {title: 'Hey', message: 'Hello there!'})
));

server.post('/api/data', function(req, res) {
  // if(!req.body.hasOwnProperty('author') ||
  //   !req.body.hasOwnProperty('text')) {
  //   res.statusCode = 400;
  //   return res.send('Error 400: Post syntax incorrect.');
  // }
  //
  // var newQuote = {
  //   author : req.body.author,
  //   text : req.body.text
  // };
  //
  // quotes.push(newQuote);
  res.json(true);
});
server.listen(PORT, '192.168.2.221', err => {
  if (err) console.log(`=> ERROR:  ${err}`);
  console.log(`=> Webpack server is running on port ${PORT}`);
});
