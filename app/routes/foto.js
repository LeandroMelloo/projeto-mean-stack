module.exports = function(app) {

    var api = app.api.foto;

     // define as rotas de acesso para 'buscarPorId' e 'removePorId'
     app.route('/v1/fotos')
        // buscar as fotos do array
        .get(api.lista)
        // adicionar as fotos dentro do array
        .post(api.adiciona);

    // define as rotas de acesso para 'buscarPorId' e 'removePorId'
    app.route('/v1/fotos/:id')
        // buscar as fotos do array por ID
        .get(api.buscarPorId)
        // deleta as fotos do array por ID
        .delete(api.removePorId)
        // atualizar as fotos do array por ID
        .put(api.atualizaPorId);

};
