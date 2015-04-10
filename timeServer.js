var net = require("net");
var server;

// check out strftime
function format(number) {
  return (number < 10 ? "0" : "") + number;
}

function getDate() {
  var now = new Date();
  var year = now.getFullYear();
  var month = format((now.getMonth()+1).toString());
  var date = format(now.getDate().toString());
  var hour = format(now.getHours().toString());
  var minute = format(now.getMinutes().toString());
  return year + "-" + month + "-" + date + " " + hour + ":" + minute;
}

server = net.createServer (function (socket) {
  socket.end(getDate()+"\n");
});
server.listen(Number(process.argv[2]));