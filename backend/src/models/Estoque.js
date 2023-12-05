const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    required: true,
    default: 0,
  },
  IDProduto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true,
  },
  Quantidade: {
    type: Number,
    required: true,
  },
  Sala: {
    type: String,
    required: true,
  },
});

estoqueSchema.pre('save', async function (next) {
  if (!this._id) {
    let maxId = await Estoque.findOne({}, {}, { sort: { '_id': -1 } }).exec();
    this._id = maxId ? maxId._id + 1 : 1;
  }
  next();
});

const Estoque = mongoose.model('Estoque', estoqueSchema);

module.exports = Estoque;
