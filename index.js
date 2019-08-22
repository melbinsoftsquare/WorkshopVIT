let express = require('express');
let path = require('path');
let server = express();

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.get('/name', (req, res) => {
    res.send('Hello, ' + req.query.name);
});

server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

server.get('/add', (req, res) => {
    res.send('Addition is: ' + (parseInt(req.query.num1) + parseInt(req.query.num2)));
});

server.listen(4000);
