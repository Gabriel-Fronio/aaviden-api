const IP = require('./IP');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

server.post('/IP/:ip', function(req,res) {
    IP.ip = req.params.ip;
    res.send(IP.ip +' added');
});

server.get('/IP', function(req,res) {
    res.send(IP.ip);
});