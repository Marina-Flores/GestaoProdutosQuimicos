const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String, 
    matricula: String,
    cargo: {
        type: String,
        enum: ['Professor', 'Analista']
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;