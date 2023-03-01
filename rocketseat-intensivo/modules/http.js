const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/home') {
        res.whiteHead(200, {'content-type': 'text/html'});
        res.end('<h1>Home page</h1>')
    }
});

server.listen(port, () => console.log(`rodando na porta ${port}`))