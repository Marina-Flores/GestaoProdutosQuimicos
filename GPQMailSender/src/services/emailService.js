const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const apiKey = process.env.SENDGRID_API_KEY;
const from = process.env.SENDGRID_EMAIL;
const templateId = process.env.SENGRID_TEMPLATE;

sgMail.setApiKey(apiKey);

const enviarEmail = async (destinatario, url) => {

    const msg = {
        to: destinatario,
        from: from,
        templateId: templateId,
        dynamicTemplateData: {
            urlBotao: url,
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
