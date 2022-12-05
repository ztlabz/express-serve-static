var createError = require('http-errors');
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser'); // http://expressjs.com/en/resources/middleware/cookie-parser.html
var logger = require('morgan');

/*
var indexRouter = require('./routes/index');
const authRouter = require('./routes/auth-router.js');
const userRouter = require('./routes/user-router.js');
*/

var cors = require('cors');


//

var app = express();

app.use(cors());
// That’s it. CORS is now enabled. If you make a request to your app, you will notice a new header being returned: Access-Control-Allow-Origin: *

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json());

// INIT
if (true) {
  console.log('***** initial');
}

/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/

app.use(logger('dev'));

// PARSERS
app.use(express.json()); // This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false })); // This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(cookieParser());
// You should use the parser middleware before the route declaration part


app.use(express.static(path.join(__dirname, 'public'))); // serve everything in public folder as static files

/*
const loggingMiddleware = (req, res, next) => {
  console.log('loggingMiddleware');
  console.log('ip:', req.ip);
  next();
}
app.use(loggingMiddleware);
*/


// ROUTES


// testing routes
/*
for testing type in browser adressbar:
http://localhost:3001/
http://localhost:3001/test
http://localhost:3001/testnest
http://localhost:3001/testnest/test
*/
/*
var testNestedRouter = express.Router();
testNestedRouter.route('/')
  .get(function (req, res) {
    res.status(200)
      .send('testNestedRouter is nested in /testnest - route: /');
  });
testNestedRouter.route('/test')
  .get(function (req, res) {
    res.status(200)
      .send('testNestedRouter is nested in /testnest - route: /test');
  });

// app.use('/', indexRouter);
app.use('/test', function (req, res) {
  res.status(200)
    .send('root route: /test  (also try /testnest and /testnest/test)');
});
app.use('/testnest', testNestedRouter);
*/

/*
// api v1 routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
*/


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('***** express-serve-static READY');

module.exports = app;
