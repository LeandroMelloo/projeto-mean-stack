const mongoose = require('mongoose');

const schemaFoto = mongoose.Schema({

    titulo: { 
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    grupo: {
        type: Number,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    }
});

mongoose.model('Foto', schemaFoto)