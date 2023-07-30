const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const SendMail = (req, res) => {

  const { name, email, message } = req.body;

  const data = `
    Nombre: ${name}\r\n
    Correo: ${email}\r\n
    Mensaje: ${message}
  `;

  mail.send({
    to: 'contacto@elprogramador.co',
    from: 'contacto@elprogramador.co',
    subject: 'Nuevo Mensaje de Contacto!',
    text: data,
    html: data.replace(/\r\n/g, '<br>'),
  }).then(
    () => res.status(200).json({ status: 'Ok' })
  ).catch(
    () => res.status(400).json()
  );

}

export default SendMail