// const http = require('http');

// const server = http.createServer((req, res) =>{
//     // console.log(req)
//     console.log('RajKushwaha')
// });

// // server.listen(4000)

const http = require('http')

const server = http.createServer((req, res) => {
  console.log('Raj Kushwaha')

  res.setHeader('Content-Type', 'text/plain')
  res.end('RAJ KUSHWAHA')
});

server.listen(4000, () => {
  console.log('Server is running on port 4000')
});

