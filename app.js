'use strict'

// bring in node_modules
const express = require('express'),
          app = express(),
         http = require('http'),
   bodyParser = require('body-parser'),
    sequelize = require("./models").sequelize,
       server = http.Server(app),
         path = require('path');


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));

// add the apps static assets
app.use('/static', express.static(path.join(__dirname, '/public')));

// add the apps views and view engine
app.set('view engine', 'pug')


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// add the view routes
const routes = require('./routes/index.js');
app.use(routes);

app.use((req, res, next) => {
  let err = new Error('The page you are looking for is not here.');
  err.status = 404;
  next(err);
});// end of 404 error page

app.use( (err, req, res, next) => {
  res.locals.err = err;
  console.log(res.locals.err.message);
  res.status = 500;
  res.render('error', {err: err});
});// end of error handler

// sync server on startup of server
sequelize.sync().then(() => {
  server.listen(3000);
})
