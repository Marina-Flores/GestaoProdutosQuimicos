const schedule = require('node-schedule');
const Envio = require('../models/Envio');
const emailService = require('../services/emailService');

const processarEnvios = async () => {
    try{
        const envios = await Envio.find({ enviado: false }).exec();

        envios.forEach(async (envio) => {
            try{
                const { destinatario, nomeDestinatario } = envio; 

            }
            catch(err) {}
        })
    }  catch(err) {}
}