// Rewrite this program using "async" or "after"

var concatStream = require("concat-stream");
var http = require("http");
var results = [];
var count = 0;

function printResults () {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

function httpGet (index, url) {
  http.get(url, function (res) {
    res.pipe(concatStream( function (data) {
      results[index] = data.toString();
      count++;
      if (count === process.argv.length - 2) {
        printResults();
      }
    }));
  });
}

for (var index = 0; index < process.argv.length - 2; index++) {
  httpGet(index, process.argv[index+2]);
}