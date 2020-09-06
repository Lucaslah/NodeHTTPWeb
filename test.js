
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('INKSTATUS web server is working!!! CTR + C to quit on the command line.'); //write a response to the client
  res.end(); //end the response
}).listen(5000); 
console.log("Go to http://localhost:5000 to see if the test is working.")
