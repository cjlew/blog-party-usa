const express = require('express');

const app = express();

// app routes 
// app.HTTPVerb(
//   "path/being/visted",
//   function middlewareCB (requestObject, responseObject) {
//     // form server response
//   }
// );

app.get('/', (req, res) => res.end('hey what is good?'));

app.listen(3000, () => console.log('I am listening on port 3000'));
