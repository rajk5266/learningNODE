// const http = require('http');

// const server = http.createServer((req, res) =>{
//     // console.log(req)
//     console.log('RajKushwaha')
// });

// // server.listen(4000)

const http = require('http')

const server = http.createServer((req, res) => {
  // console.log('Raj Kushwaha')

  const url = req.url;
  if(url == '/home'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> hello from node.js </title></head>');
  res.write('<body><h1> WELCOME HOME</h1></body>');
  res.write('</html>')
  return res.end()
  }
  else if(url == '/Aboutus'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> hello from node.js </title></head>');
  res.write('<body><h1> Welcome to About Us page </h1></body>');
  res.write('</html>')
  return res.end()
  }
  else if(url == '/node'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> hello from node.js </title></head>');
  res.write('<body><h1> Welcome to my Node.js project </h1></body>');
  res.write('</html>')
  return res.end()
  }

  console.log(req.url, req.method, req.headers)
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> hello from node.js </title></head>');
  res.write('<body><h1> hello </h1></body>');
  res.write('</html>')
  res.end()

  // res.end('RAJ KUSHWAHA')
  // process.exit()
});

server.listen(4000, () => {
  console.log('Server is running on port 4000')
});

