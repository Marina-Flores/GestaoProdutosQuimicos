require('dotenv').config(); 

const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET;

const generateToken = () => {
    const token = jwt.sign({}, secret, { expiresIn: '5h' });
    return token;
};

module.exports = {
    generateToken,
};