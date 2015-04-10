var fs = require("fs");
var http = require("http");

var port = Number(process.argv[2])
var file = process.argv[3];

function onConnect(req, res) {
  res.writeHead(200, { "content-type": "text/plain" });
  fs.createReadStream(file).pipe(res);
}

http.createServer(onConnect).listen(port);