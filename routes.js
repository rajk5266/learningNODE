const fs = require('fs');
const requestHandler = (req, res) =>{
    const url = req.url;
     const method = req.method


if (url === '/') {
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        res.statusCode = 500
        res.end('error while loading')
      } 
      else {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Display Message</title></head>')
        res.write('<body>')
        res.write('<h1>' + data + '</h1>')
        res.write('<hr>')
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    });
  }
   else if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) =>{
      console.log(chunk)
      body.push(chunk)
    })
   return req.on('end', () =>{
      const parsedbody = Buffer.concat(body).toString();
      const message = parsedbody.split('=')[1];
      console.log(message)
      fs.writeFile('message.txt', message, (error) =>{

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end()
      });
    })
  } 
  else if (url === '/home') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> hello from node.js </title></head>');
    res.write('<body><h1> WELCOME HOME</h1></body>');
    res.write('</html>')
    return res.end()
  } 
  else if (url === '/Aboutus') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> hello from node.js </title></head>');
    res.write('<body><h1> welcoe to about us page</h1></body>');
    res.write('</html>')
    return res.end()
  }
   else if (url === '/node') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> hello from node.js </title></head>');
    res.write('<body><h1> welcome to my node.js projecr</h1></body>');
    res.write('</html>')
    return res.end()
  }
   else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>hello from node.js</title></head>');
    res.write('<body><h1>hello</h1></body>');
    res.write('</html>');
    res.end();
  }
}

//  module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     sometext: "large texts"
// }

// module.exports.handler = requestHandler;
// module.exports.sometext = 'large texts'

exports.handler = requestHandler;
exports.sometext = "textxxx"