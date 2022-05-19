const http = require('http');

const server = http.createServer((_req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Hello World\n');
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});