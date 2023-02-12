const http = require('http');
http.createServer((request, response)=>{
    response.writeHead(200, {'Contet-Type':'text/plain'});
    response.write('Matheus Paizante');
    response.end();
}).listen(1337);