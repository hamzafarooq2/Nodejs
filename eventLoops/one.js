const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hei Hamza')
});

server.listen(3000, console.log('Server listening on port : 3000'));


// event loops wait for request to come in than,we run our call back