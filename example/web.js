'use strict';

var http = require('http');

http.createServer(function (req, res) {

    console.log('> ' + req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
