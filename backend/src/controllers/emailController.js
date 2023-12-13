const EmailService = require('../services/emailService');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const enviarEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await EmailService.enviarEmailRecuperarSenha(email);
    return res.status(200).json(response);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};

const validarToken = async (req, res) => {
  try {
    const { token } = req.query;
    const response = await EmailService.validarToken(token);
    return res.status(200).json(response);
  } catch (error) {
    console.error('Erro ao validar token:', error);
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
}

const trocarSenha = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const userId = await EmailService.validarToken(token);
    console.log(userId);

    const usuario = await User.findById(userId);
    console.log(usuario);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    bcrypt.hash(newPassword, 10, (err, hash) => {
      if (err) {
        console.error('Erro ao gerar hash da senha:', err);
        return;
      }
      usuario.senha = hash;
    });

    await usuario.save();

    return res.status(200).json({ message: 'Senha atualizada com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar senha do usuário', message: error.message });
  }
}

module.exports = {
  enviarEmail,
  validarToken,
  trocarSenha
};
