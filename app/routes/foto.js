module.exports = function(app) {
    // buscar as fotos do array
    app.get('/v1/fotos', function(req, res) {

        // array de fotos, criado estaticamente sem conexão com o BD
        var fotos = [
            {_id:1, "titulo": "Leão","url":"http://www.fundosanimais.com/Minis/leoes.jpg"},
            {_id:2, "titulo": "Leão 2","url":"http://www.fundosanimais.com/Minis/leoes.jpg"}
        ]

        // retorna o array de fotos do tipo 'JSON'
        res.json(fotos);
    });

};
