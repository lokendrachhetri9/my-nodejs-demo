//Makes Node.js act like an http server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/'){
        console.log("for console: Hello World!");
        res.write('For Browser: Hello World!');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Listening on port 3000....')
})