const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const enviarEmail = async (destinatario) => {
  const corpoTexto = `Olá!\n\nEste é um e-mail de exemplo em texto simples.`;

  const corpoHTML = `
    <html>
      <body>
        <h1>Olá!</h1>
        <p>Este é um e-mail de exemplo em HTML.</p>
      </body>
    </html>
  `;

  const msg = {
    to: destinatario,
    from: 'mlbtf@discente.ifpe.edu.br',
    subject: 'Esqueci Minha Senha',
    text: corpoTexto, // Corpo de texto simples
    html: corpoHTML, // Corpo em HTML
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
