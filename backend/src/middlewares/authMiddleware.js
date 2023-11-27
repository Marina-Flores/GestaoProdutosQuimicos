require('dotenv').config(); 

const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET;

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token não fornecido ou no formato inválido' });
    }

    const token = authHeader.split(' ')[1]; 

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).json({ message: 'Token inválido' });
        }

        next();
    });
};

module.exports = verifyToken;