var filePath = process.argv[2];
var ext = process.argv[3];
var fs = require("fs");
var path = require("path");

fs.readdir(filePath, function (err, list) {
  list.forEach( function (file) {
    if (path.extname(file) === "." + ext) {
      console.log(file);
    }
  });
});