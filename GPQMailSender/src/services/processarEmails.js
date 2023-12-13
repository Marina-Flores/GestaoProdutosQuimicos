const schedule = require('node-schedule');
const Envio = require('../models/Envio');
const emailService = require('../services/emailService');

const processarEnvios = async () => {
    try{
        const envios = await Envio.find({ enviado: false }).exec();

        envios.forEach(async (envio) => {
            try{
                const { destinatario, url } = envio; 
                const enviadoComSucesso = emailService.enviarEmail(destinatario, url);
            
                if(enviadoComSucesso){
                    envio.enviado = true;
                    await envio.save();
                    console.log(`Email para ${destinatario} enviado com sucesso.`);
                }
                else{
                    console.error(`Erro ao enviar e-mail para ${destinatario}`);
                }            
            }
            catch(err) {
                console.error('Erro ao processar e-mail:', err);
            }
        })
    }  catch(err) {
        console.error('Erro ao buscar e-mails não enviados:', err);
    }
};

// const job = schedule.scheduleJob('*/20 * * * * *', processarEnvios);
// processarEnvios();

module.exports = {
    processarEnvios
  };
  