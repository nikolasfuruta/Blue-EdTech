/*mostrar a criação de um servidor em Node,
explicando sobre o protocolo http.*/

const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("SERVIDOR RODANDO");
    res.end();
}).listen(3000);
console.log("SERVIDOR RODANDO NA PORTA 3000")