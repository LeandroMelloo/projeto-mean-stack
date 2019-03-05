const mongoose = require('mongoose');

const schemaUsuario = mongoose.Schema({

    login: { 
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    }
});

mongoose.model('Usuario', schemaUsuario)