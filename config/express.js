const express = require('express');
const app = express();

// nosso primeiro middleware
app.use(express.static('./public'));

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

// confiurações do express

module.exports = app; // exportando nossa instância do Express