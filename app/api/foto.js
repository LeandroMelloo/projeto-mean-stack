const api = {};
var contador = 2;

// array de fotos, criado estaticamente sem conexão com o BD
var fotos = [
    { _id: 1, "titulo": "Leão", "url": "http://www.fundosanimais.com/Minis/leoes.jpg" },
    { _id: 2, "titulo": "Leão 2", "url": "http://www.fundosanimais.com/Minis/leoes.jpg" },
    { _id: 3, "titulo": "Leão 3", "url": "http://www.fundosanimais.com/Minis/leoes.jpg" }
]

// api.lista => função para listar todas as fotos
api.lista = function (req, res) {

    // retorna o array de fotos do tipo 'JSON'
    res.json(fotos);
};

// api.adiciona => função para adicionar as fotos 
api.adiciona = function(req, res) {

    var adicionaFoto = req.body;
    adicionaFoto._id = ++contador;
    fotos.push(adicionaFoto);

    // retorna a foto adicionada no array
    res.json(adicionaFoto);
};

// api.buscarPorId => função para buscar uma foto por ID
api.buscarPorId = function (req, res) {

    // find => busca uma foto por id dentro de um array
    var fotoBuscar = fotos.find(function (fotoBuscar) {
        return fotoBuscar._id == req.params.id;
    });

    // retorna a foto por ID do tipo 'JSON'
    res.json(fotoBuscar);
};

// api.removePorId => função para remover uma foto por ID
api.removePorId = function (req, res) {

    // filter => filtra uma foto por id dentro de um array
        fotoRemover = fotos.filter(function (fotoRemover) {
            return fotoRemover._id != req.params.id;
    });

    // retorna o status '204' para o usuario
    res.sendStatus(204);
};

// api.atualizaPorId => função para remover uma foto por ID
api.atualizaPorId = function (req, res) {

    // findIndex => busca uma foto por id dentro de um array pelo indice
        var fotoAtualizar = req.body; // e os dados enviados na requisição por 'req.body'
        var fotoAtualizarId = req.params.id; // Obtemos o ID ou qualquer outro identificador através de 'req.params'

        var indiceAtualizaId = fotos.findIndex(function(fotoAtualizar) {
            return fotoAtualizar._id == fotoAtualizarId;
        });

        fotos[indiceAtualizaId] = fotoAtualizar;

        res.sendStatus(200);

    // retorna o status '204' para o usuario
    res.sendStatus(204);
};

module.exports = api;