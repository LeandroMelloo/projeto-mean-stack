module.exports = function (app) {

    const mongoose = require('mongoose'); // preciso do model do meu usuario
    const jwt = require('jsonwebtoken'); // autenticar com 'jsonwebtoken'
    const api = {};
    const model = mongoose.model('Usuario'); // buscar os usuarios no MongoDB

    api.autentica = function (req, res) {

        model
            .findOne({ login: req.body.login, senha: req.body.senha })
            .then(function (usuario) {
                if (!usuario) {
                    console.log('Login e senha inválidos');
                    res.sendStatus(401);
                } else {
                    // criar token
                    var token = jwt.sign(usuario.login, app.get('secret'), {
                        expiresTn: 84600 // quarda o tempo de expiração (24 horas);
                    });

                    console.log('Token criado e sendo enviado no header de resposta');
                    res.set('x-acess-token', token);
                    res.end();
                };

            }, function (error) {
                console.log('Login e senha inválidos');
                res.sendStatus(401);
            });
    };

    api.verificaToken = function (req, res) {
        if (token) {
            var token = req.headers['x-acess-token']; // recebo o token
            console.log('Verificando Token....');
            jwt.verify(token, app.get('secret'), function (err, decoded) {
                if (err) {
                    console.log('Token rejeitado');
                    res.sendStatus(401);
                };
                req.usuario = decoded;
                next(); // next => todas as minha outras rotas podem ser executadas
            }); // jwt => verifica o token com meu segredo.
        } else {
            console.log('Token não enviado')
            res.sendStatus(401);
        };
    };
    return api;
};
