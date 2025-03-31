const nodemailer = require("nodemailer");

const SendMail = async (req, res) => {
  const { name, email, message } = req.body;

  const data = `
    Nombre: ${name}\r\n
    Correo: ${email}\r\n
    Mensaje: ${message}
  `;

  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "contacto@elprogramador.co", // generated brevo user
        pass: process.env.BREVO_API_KEY, // generated brevo password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "contacto@elprogramador.co", // sender address
      to: "contacto@elprogramador.co", // list of receivers
      subject: "Nuevo Mensaje de Contacto!", // Subject line
      text: data, // plain text body
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
  }

  return res.status(400).json({ message: "Error sending email!" });
};

export default SendMail;
