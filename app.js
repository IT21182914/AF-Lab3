const fs = require('fs');

const http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Hello World!');
res.end();
}).listen(3000);


fs.readFile('file.txt', 'utf8', function (err, data) {
if (err) throw err;
console.log(data);
});




fs.writeFile('file.txt', 'Hello World!', function (err) {
if (err) throw err;
console.log('File saved!');
});


