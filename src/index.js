var http = require('http');
var uuid = require('uuid/v4');

//create a server object:
const server1 = http
  .createServer(function(req, res) {
    res.write('Hello World from port 8080!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
let server2;

console.log('listening on port 8080');

setTimeout(() => {
  //create a server object:
  server2 = http
    .createServer(function(req, res) {
      if(req.method === 'GET') {
        if (req.url === '/') {
          res.write(`Hello World from port 8000! uuid: ${uuid()}`); //write a response to the client
          res.end(); //end the response
          return;
        }
        if (req.url === '/crash') {
          const a = [];
          console.log(process.memoryUsage());
          for (let i = 0; i < 100000000; i++) {
            a[i] = i * i;
          }
          console.log(process.memoryUsage());
        }
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('404 Not Found\n');
      res.end();
    })
    .listen(8000); //the server object listens on port 8000

  console.log('listening on port 8000');
}, 2000);

// setTimeout(() => {
//   console.log('shutting down');
//   server1.close();
//   server2.close();
// }, 5000);
