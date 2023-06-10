// const http = require('http');
// const routes = require('./routes.js');
const express = require('express');

const app = express()

app.use((req, res, next) =>{
  console.log('in the middleware')
  next()
  // next() allows the request to  continue to the next middleware in line
})
app.use((req, res, next) =>{
  console.log('in the another middleware')
  // responses we can send
  res.send({key: "value"})
})


// const server = http.createServer(app)
// server.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });

app.listen(4000)