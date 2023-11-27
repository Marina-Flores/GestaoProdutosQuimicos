const mongoose = require('mongoose');
const Produto = require('../models/Produto');
const User = require('../models/User');

const LogProdutoSchema = new mongoose.Schema({
    _id: {
        type: Number, 
        unique: true,
        required: true,
        default: 0,
    },
    data: {
        type: Date,
        required: true,
        default: Date.now()
    },
    produto_id: {
        type: Number,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    qtd_utilizada: {
        type: String,
        required: true
    },
});

LogProdutoSchema.pre('save', async function(next) {
    if (!this._id) {
        let maxId = await LogProduto.findOne({}, {}, { sort: { '_id': -1 } }).exec();
        this._id = maxId ? maxId._id + 1 : 1;
    }
    try {
        const produto = await Produto.findById(this.produto_id).exec();
        if (!produto) {
            throw new Error(`O produto com o ID ${this.produto_id} é inexistente.`);
        }
        const user = await User.findById(this.user_id).exec();
        if (!user) {
            throw new Error(`O usuário com o ID ${this.usuario_id} é inexistente.`);
        }
        next();
    } catch (error) {
        next(error);
    }
});

const LogProduto = mongoose.model('LogProduto', LogProdutoSchema);

module.exports = LogProduto;