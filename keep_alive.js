var http = require('http');

http.createServer(function (req, res) {
  res.write("@wauv on discord");
  res.end();
}).listen(8080);
