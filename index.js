var express = require('express');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

// nunjucks rendering boilerplate
// nunjucks.configure('views', { noCache: true });
// app.set('view engine', 'html');
// app.engine('html', nunjucks.render);

// logging and body-parsing
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// statically serve front-end dependencies
// app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
// app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

// serve any other static files
// app.use(express.static('index.html'));

// serve dynamic routes
app.use('/api', require('./server/routes'));

// failed to catch req above means 404, forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle any errors
app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.render('error', {
    error: err
  });
});

// listen on a port
var port = 3001;
app.listen(port, function () {
  console.log('The server is listening closely on port', port)
});
