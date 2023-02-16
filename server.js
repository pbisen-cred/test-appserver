const http = require('http');
const AWS = require("aws-sdk");

const hostname = '0.0.0.0';
const port = 3000;


var meta  = new AWS.MetadataService();
var instance = "";
meta.request("/latest/meta-data/instance-id", function(err, data){
    instance = data;
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World from ${instance}`);
});

server.listen(port, hostname, () => {
  console.log(`Recieved the Request on  http://${hostname}:${port}/`);
});
