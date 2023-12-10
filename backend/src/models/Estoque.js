const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    required: true,
    default: 0,
  },
  produtos: [{
    produto_id: {
      type: Number,
      ref: 'Produto',
      required: true,
    },
    quantidade: {
      type: Number,
      required: true,
    },
  }],
  sala: {
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
