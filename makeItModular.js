var myModule = require("./myModule");
var filePath = process.argv[2];
var ext = process.argv[3];

myModule(filePath, ext, function (err, data) {
  if (err) {
    return console.log("Informative Error: " + err);
  }
  data.forEach( function (file) {
    console.log(file);
  });
});