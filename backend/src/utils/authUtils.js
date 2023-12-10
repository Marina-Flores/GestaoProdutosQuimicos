require('dotenv').config(); 

const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET;

const generateToken = (user) => {
    const token = jwt.sign({_id: user.id, }, secret, { expiresIn: '5h' });
    return token;
};

module.exports = {
    generateToken,
};