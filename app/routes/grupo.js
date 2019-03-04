module.exports = function(app) {

    var api = app.api.grupo;

    // buscar as fotos do array
    app.get('/v1/grupos', api.lista);

};