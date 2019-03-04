module.exports = function (uri) {
    const mongoose = require('mongoose');

    // criando a conexão com o MongoDB
    mongoose.connect('mongodb://' + uri, { useNewUrlParser: true });

    // verificando a conexão com o MongoDB
    mongoose.connection.on('connected', function () {
        console.log('Conectado ao MongoDB');
    });

    // verificando o erro da conexão com o MongoDB
    mongoose.connection.on('error', function (error) {
        console.log('Erro na conexão: ' + error);
    });

    // verificando o erro da conexão com o MongoDB
    mongoose.connection.on('disconnected', function () {
        console.log('Desconectado do MongoDB');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Conexão fechada pelo término da aplicação');
            process.exit(0);
        });
    })
}

