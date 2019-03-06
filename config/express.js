const consign = require('consign'); 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// variavel de ambiente
app.set('secret', 'homenavestruz');

// nosso primeiro middleware
app.use(express.static('./public'));
app.use(bodyParser.json());

// consign => referente aos caminhos das rotas('app/routes/foto.js, app/routes/grupo.js')
consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes/auth.js') // rota auth vai ser carregada primeiro do que as outras rotas
    .then('routes')
    .into(app);

// confiurações do express

module.exports = app; // exportando nossa instância do Express