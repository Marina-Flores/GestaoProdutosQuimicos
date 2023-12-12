const EmailService = require('../services/emailService');

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

const validarToken = async(req, res) => {
    try{
        const { token } = req.query;
        const response = await EmailService.validarToken(token);
        return res.status(200).json(response);
    } catch (error){
        console.error('Erro ao validar token:', error);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
}

module.exports = {
  enviarEmail,
  validarToken
};
