const nodemailer = require("nodemailer");

let transporter =nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '',
        pass: ''
    }
});

transporter.sendMail({
    from: '',
    to: '',
    subject: 'Teste de envio de email com nodejs',
    text: 'Corpo do email',
    //html: '<h1>Titulo html<h1><br><h3>corpo email html</h3>'
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})