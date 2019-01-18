const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
const testsRouter = require('./routes/tests');
const app = express();

const WhiteList = [ process.env.PROD_URL, 'http://localhost:3000/' ];

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true);

//     if(whitelist.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }

//     return callback(null, true);
//   }
// }));
const origin = process.env.PROD_URL || 'http://localhost:3000/';
app.use(cors({ origin }))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/tests', testsRouter);

module.exports = app;
