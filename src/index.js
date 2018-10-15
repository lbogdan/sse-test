var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World from port 8080!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

console.log('listening on port 8080');

setTimeout(() => {
  //create a server object:
  http
    .createServer(function(req, res) {
      res.write("Hello World from port 8000!"); //write a response to the client
      res.end(); //end the response
    })
    .listen(8000); //the server object listens on port 8000

  console.log('listening on port 8000');
}, 2000);
