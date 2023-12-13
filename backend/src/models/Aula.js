const mongoose = require('mongoose');

const AulaSchema = new mongoose.Schema({
    _id: {
        type: Number,
        unique: true,
        required: true,
        default: 0
    },
    laboratorio: {
        type: String,
        required: true,
        enum: ['Lab 1', 'Lab 2']
    },
    data: {
        type: Date,
        required: true
    },
    turno: {
        type: String,
        required: true,
        enum: ['Manhã', 'Tarde', 'Noite']
    },
    produtos: [{
            type: Number,
            required: true
    }],
    reservadoPor: {
        type: Number,
        required: true
    }
})

AulaSchema.pre('save', async function(next) {
    if (!this._id) {
        let maxId = await Aula.findOne({}, {}, { sort: { '_id': -1 } }).exec();
        this._id = maxId ? maxId._id + 1 : 1;
    }
    next();
});

const Aula = mongoose.model('Aula', AulaSchema);

module.exports = Aula;