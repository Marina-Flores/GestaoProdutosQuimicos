require('dotenv').config();

const User = require('../models/User');
const Envio = require('../models/Envio');
const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET;

const enviarEmailRecuperarSenha = async (email) => {
  try {
    const usuario = await User.findOne({ email });
    console.log(usuario);
    if (!usuario) {
      return { message: 'Usuário não encontrado.' };
    }

    const token = jwt.sign({ userId: usuario._id }, secret, { expiresIn: '1h' });

    const urlToken = `https://localhost:3000/recuperar-senha?token=${token}`;

    const novoEnvio = new Envio({
      destinatario: email,
      nomeDestinatario: usuario.nome,
      tipo: 'EsqueciMinhaSenha',
      url: urlToken,
    });

    await novoEnvio.save();

    return { message: 'E-mail enviado com sucesso.' };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw new Error('Erro interno no servidor.');
  }
};

const validarToken = async (token) => {
  try {
    let userId = 0;

    jwt.verify(token, secret, (err, decoded) => {
      userId = decoded.userId;
    });

    return userId;
  } catch (error) {
    console.error('Erro ao validar token:', error);
    throw new Error('Erro interno no servidor.');
  }
};

module.exports = {
  enviarEmailRecuperarSenha,
  validarToken
};
