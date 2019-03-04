module.exports = function(app) {

    // busca os grupos do array
    app.get('/v1/grupos', function(req, res) {

        // array de grupos, criado estaticamente sem conexão com o BD
        var grupos = [
            {_id:1, nome: 'esporte'},
            {_id:2, nome: 'lugares'},
            {_id:3, nome: 'animais'}
        ]

        // retorna o array de grupos do tipo 'JSON'
        res.json(grupos);
    });
};