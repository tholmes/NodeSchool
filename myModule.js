var fs = require("fs");
var path = require("path");

module.exports = function (filePath, ext, cb) {

  fs.readdir(filePath, function (err, list) {
    if (err) {
      return cb(err);
    }
    
    list = list.filter( function (file) {
      return path.extname(file) === '.' + ext;
    });

    cb(err, list);

  });

}