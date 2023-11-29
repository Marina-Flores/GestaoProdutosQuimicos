require('dotenv').config();

const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');

const emailService = process.env.EMAIL_SERVICE;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

const enviarEmail = (destinatario, nomeDestinatario) => {
    const transporter = nodemailer.createTransport({
        service: emailService,
        auth: {
            user: emailUser,
            pass: emailPass
        }
    });
    
    const source = fs.readFileSync('../templates/esqueciMinhaSenha.handlebars', 'utf8');
    const template = handlebars.compile(source);
    
    const data = {
        nome: nomeDestinatario,
        url: 'http://localhost:3000/recuperar-senha'
    };

    const htmlEmail = template(data);

    const mailOptions = {
        from: emailUser, 
        to: destinatario,
        subject: 'Recuperação de Senha',
        html: htmlEmail
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
          } else {
            console.log('E-mail enviado:', info.response);
          }
    })

}

