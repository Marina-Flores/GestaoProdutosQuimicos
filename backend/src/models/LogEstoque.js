const mongoose = require('mongoose');

const LogEstoqueSchema = new mongoose.Schema({
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
    estoque_id: {
        type: Number,
        required: true
    },
    qtd_movimentada: {
        type: Number,
        required: true,
        default: 0
    },
    descricao: {
        type: String,
        required: true
    }
});

LogEstoqueSchema.pre('save', async function (next) {
    if (!this._id) {
        let maxId = await LogEstoque.findOne({}, {}, { sort: { '_id': -1 } }).exec();
        this._id = maxId ? maxId._id + 1 : 1;
    }
    next();
});

const LogEstoque = mongoose.model('LogEstoque', LogEstoqueSchema);

module.exports = LogEstoque;
