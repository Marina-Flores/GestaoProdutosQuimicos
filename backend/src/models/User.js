const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({   
    _id: {
        type: Number, 
        unique: true,
        required: true,
        default: 0,
    },
    nome: {
        type: String,
        require: true
    }, 
    email:{
        type: String,
        unique: true,
        require: true
    },
    matricula: {
        type: String,
        unique: true,
        require: true       
    },
    cargo: {
        type: String,
        enum: ['Professor', 'Técnico de Laboratório', 'Analista']
    },
    senha: {
        type: String,
        require: true       
    }
});

UserSchema.pre('save', async function(next) {
    if (!this._id) {
        let maxId = await User.findOne({}, {}, { sort: { '_id': -1 } }).exec();
        this._id = maxId ? maxId._id + 1 : 1;
    }
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;