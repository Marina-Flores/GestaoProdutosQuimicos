const { generateToken } = require('../utils/authUtils');

const bcrypt = require('bcrypt');
const User = require('../models/User');

const authController = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }
      
      const passwordMatch = bcrypt.compare(senha, user.senha);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const token = generateToken();
      
      return res.status(200).json({ message: 'Login bem-sucedido', accessToken: token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro no servidor' });
    }
  },
};

module.exports = authController;
