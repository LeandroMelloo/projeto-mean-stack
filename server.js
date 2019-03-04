const http = require('http');
const app = require('./config/express');
require('./config/database')('localhost:27017/alurapic');

http.createServer(app).listen(3000, function(req, res) {
    console.log('Servidor iniciado na porta 3000');
});