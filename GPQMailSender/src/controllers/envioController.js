const processarEmails = require('../services/processarEmails');

const emailController = {
    enviarEmails: async (req, res) => {
        try{
            await processarEmails.processarEnvios();
            res.status(200).json({ message: 'Processo de envio de e-mails não enviados iniciado.'});
        }
        catch(err){   
             res.status(500).json({ error: 'Erro ao processar e-mails não enviados' });
        }
    }
}

module.exports = emailController;