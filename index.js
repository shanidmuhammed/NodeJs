const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, { 'content-type' : 'text/html' });
        res.end('<h1>Hello I am Shanid</h1>');
    }
    
})
    const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Listening on port 3000');
    
})
