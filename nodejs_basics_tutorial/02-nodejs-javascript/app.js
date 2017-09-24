var http = require('http');
var module1 = require('./module1');
var moduletwo = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module1.myString);
    response.write(moduletwo.myVariable);
    moduletwo.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);