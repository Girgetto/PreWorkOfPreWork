require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/server', { useMongoClient: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch((err) => {
    console.error('Error connecting to mongo', err);
  });


const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


app.use('/', require('./routes/index'));

app.use((req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});


module.exports = app;
