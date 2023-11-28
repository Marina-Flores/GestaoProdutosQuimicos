const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    _id: {
        type: Number, 
        unique: true,
        required: true,
        default: 0,
    },
    nome: {
        type: String,
        unique: true,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true,
        default: 0
    },
    validade: {
        type: Date,
        required: true
    },
});

ProdutoSchema.pre('save', async function(next) {
    if (!this._id) {
        let maxId = await Produto.findOne({}, {}, { sort: { '_id': -1 } }).exec();
        this._id = maxId ? maxId._id + 1 : 1;
    }
    next();
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;
