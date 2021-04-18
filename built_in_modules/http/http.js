const http = require('http');

const server = http.createServer((req, res) => {   // req(represent incoming request) & res(what we are sending back) are objects

    if(req.url === '/') {
        res.end('Welcome to our home page.')
    }
    if(req.url === '/about') {
        res.end('Here is our History!')
    }

    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find page you are looking for</p>
    <a href="/">back homepage</a> 
    `);

})

server.listen(5000);

// res.write('Welcome to Lahore!');
// res.end();