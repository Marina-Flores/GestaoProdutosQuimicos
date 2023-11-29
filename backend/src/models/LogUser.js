const mongoose = require('mongoose');
const User = require('../models/User');

const LogUserSchema = new mongoose.Schema({
    _id: {
        type: Number, 
        unique: true,
        required: true,
        default: 0,
    },
    user_id: {
        type: Number,
        required: true
    },
    user_id_impactado: {
        type: Number,
        required: true
    },
    action: {
        type: String,
        required: true,
    },
});

LogUserSchema.pre('save', async function(next) {
    if (!this._id) {
        let maxId = await LogUser.findOne({}, {}, { sort: { '_id': -1 } }).exec();
        this._id = maxId ? maxId._id + 1 : 1;
    }
    try {
        const user = await User.findById(this.user_id).exec();
        if (!user) {
            throw new Error(`O usuário com o ID ${this.usuario_id} é inexistente.`);
        }
        next();
    } catch (error) {
        next(error);
    }
});

const LogUser = mongoose.model('LogUser', LogUserSchema);

module.exports = LogUser;