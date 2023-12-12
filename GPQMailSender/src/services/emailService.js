const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const enviarEmail = async (destinatario) => {

    const msg = {
        to: destinatario,
        from: 'mlbtf@discente.ifpe.edu.br',
        templateId: 'd-a1ada49d3f59433998f5613494237ac2',
        dynamicTemplateData: {
            urlBotao: 'https://localhost:3000/',
        }
    };

    try {
        await sgMail.send(msg);
        console.log('E-mail enviado com sucesso!');
        return true;
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return false;
    }
};

module.exports = { enviarEmail };
