var http = require('http');
var fs = require('fs');

// Video 5: https://youtu.be/p5eCYKiZN-4
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // fs.readFile('./index.html', null, function (error, data) {
    fs.readFile('03-node-only-render-html/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
            console.log('File not found! ' + error)
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);