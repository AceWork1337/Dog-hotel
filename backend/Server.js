const http = require('http');

http.createServer((req,res) =>{
    res.writeHead(200,{'Contgent-type':'text/html'});
    res.end(`
        <html>
        <body>
            <div>ace</div>
        </body>
        </html>
    `)
}).listen(8181,'127.0.0.1');