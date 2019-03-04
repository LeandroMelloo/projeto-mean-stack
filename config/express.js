const consign = require('consign'); 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// nosso primeiro middleware
app.use(express.static('./public'));

app.use(bodyParser.json());

// consign => referente aos caminhos das rotas('app/routes/foto.js, app/routes/grupo.js')
consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

// confiurações do express

module.exports = app; // exportando nossa instância do Express