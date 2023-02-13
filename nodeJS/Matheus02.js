const http = require('http');

http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, {'Content-Type':'text/plain'});
    resposta.write('Matheus Paizante 02\n');
    resposta.end();
}).listen(1337);