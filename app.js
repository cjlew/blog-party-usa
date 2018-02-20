//Import express, web framework
const express = require('express');
//Import morgan, a logger for requests
const morgan = require('morgan');
// SIMPLIFY DIRECTORY PATHS
const path = require('path');
// READ AND WRITE FROM FILES
const fs = require('fs');
// Read blog json File
const blogFile = fs.readFileSync('./seeds/blogs.json', 'utf-8');
const blogArray = JSON.parse(blogFile);

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


// Routes
app.get('/', (req, res) => {
  res.render('hello',{title: 'Blog Party USA', blogtitle: 'My Blog' });
});

app.get('/index', (req,res) => {
  res.render('index', {
    blogs: blogArray
  });
});


// the colon indicates this is a url parameter
app.get('/:info', (req, res) => {
    // we have access to the params in our request object
    res.end(req.params.info);
    }
);

app.get('/show', (req,res) => {
  res.render('show');
});

app.get('/create', (req,res) => {
  res.render('create');
});

app.get('/update', (req,res) => {
  res.render('update');
});

app.get('/delete', (req,res) => {
  res.render('delete');
});

app.listen(3000, () => console.log('I am listening on port 3000'));
