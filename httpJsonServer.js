var http = require("http");
var url = require("url");

var port = Number(process.argv[2])

function parseTime(time) {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  };
}

function unixTime(time) {
  return {
    "unixtime": time.getTime()
  };
}

var parser = {
  "/api/parsetime": parseTime,
  "/api/unixtime": unixTime
};

function onConnect(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var pathName = parsedUrl.pathname;
  
  var result = parser[pathName](time);

  if (result) {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
}

http.createServer(onConnect).listen(port);