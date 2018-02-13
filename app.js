//Import express, web framework
const express = require('express');
//Import morgan, a logger for requests
const morgan = require('morgan');
// SIMPLIFY DIRECTORY PATHS
const path = require('path');
// READ AND WRITE FROM FILES
const fs = require('fs');

const app = express();

// app routes
// app.HTTPVerb(
//   "path/being/visted",
//   function middlewareCB (requestObject, responseObject) {
//     // form server response
//   }
// );


//Set Settings
app.set('views', 'views');
app.set('view engine', 'pug');
//Setup logger
app.use(morgan('combined'));
// Setup Static Files
app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
  res.render('hello',{title: 'Blog Party USA', blogtitle: 'My Blog' });
});

app.get('/index', (req,res) => {
  res.render('index');
});

app.listen(3000, () => console.log('I am listening on port 3000'));
