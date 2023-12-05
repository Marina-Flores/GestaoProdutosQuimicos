const mongoose = require('mongoose');

const envioSchema = new mongoose.Schema({
    destinatario: {
        type: String, 
        require: true
    },
    nomeDestinatario: {
        type: String,
        require: true
    },
    tipo:{
        type: String, 
        enum: ['EsqueciMinhaSenha', 'Autenticacao2Fatores'],
        require: true
    },
    enviado: {
        type: Boolean,
        default: false
    }, 
    url: {
        type: String,
        require: true
    }
});

const Envio = mongoose.model('Envio', envioSchema);
module.exports = Envio;