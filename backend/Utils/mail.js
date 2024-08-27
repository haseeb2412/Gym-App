const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // Corrected the spelling of 'SMTP'
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE, // Corrected the spelling of 'SMTP'
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions = { // Renamed to 'mailOptions' for clarity and convention
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message}\n\nEmail of user who sent the message: ${options.userEmail}`, // Corrected spelling and punctuation
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;