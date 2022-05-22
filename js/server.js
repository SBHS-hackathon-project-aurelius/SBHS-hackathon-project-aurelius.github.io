var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON>stringify({ message: "Hello World "}))
}).listen(6000);