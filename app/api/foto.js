const mongoose = require('mongoose');

const api = {};

var model = mongoose.model('Foto');

// api.lista => função para listar todas as fotos
api.lista = function (req, res) {

    model
        .find({})
        .then(function (fotos) {
            res.json(fotos);

        }, function (error) {
            console.log(error);
            res.sendStatus(500);
        });
};

// api.buscarPorId => função para buscar uma foto por ID
api.buscarPorId = function (req, res) {

    model
        .findById(req.params.id)
        .then(function (foto) {
            if (!foto) throw Error('Foto não encontrada');
            res.json(foto);

        }, function (error) {
            console.log(error);
            res.sendStatus(500);
        });
};

// api.removePorId => função para remover uma foto por ID
api.removePorId = function (req, res) {

    model
        .remove({ _id: req.params.id })
        .then(function () {
            res.sendStatus(200);

        }, function (error) {
            console.log(error);
            res.sendStatus(500);
        });
};

// api.adiciona => função para adicionar uma foto
api.adiciona = function (req, res) {

    model
        .create(req.body)
        .then(function (foto) {
            res.json(foto);

        }, function (error) {
            console.log(error);
            res.sendStatus(500);
        });
};

// api.atualizaPorId => função para remover uma foto por ID
api.atualizaPorId = function (req, res) {

    model
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function (foto) {
            res.json(foto);

        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;