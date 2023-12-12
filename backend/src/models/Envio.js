const mongoose = require('mongoose');

const EnvioSchema = new mongoose.Schema({
    _id: {
        type: Number, 
        unique: true,
        required: true,
        default: 0,
    },
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


EnvioSchema.pre('save', async function(next) {
    if (!this._id) {
        let maxId = await Envio.findOne({}, {}, { sort: { '_id': -1 } }).exec();
        this._id = maxId ? maxId._id + 1 : 1;
    }
    next();
});

const Envio = mongoose.model('Envio', EnvioSchema);
module.exports = Envio;