const express = require('express');
const app = express();

// nosso primeiro middleware
app.use(express.static('./public'));

// require => referente a 'fotos.js' caminho da rotas
require('../app/routes/foto')(app);

// require => referente a 'grupo.js' caminho da rotas
require('../app/routes/grupo')(app);

// confiurações do express

module.exports = app; // exportando nossa instância do Express