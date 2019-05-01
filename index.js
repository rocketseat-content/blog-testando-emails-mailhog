const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAILHOG_HOST,
  port: '1025',
  auth: null
});

transport.sendMail({
  from: 'Diego Fernandes <diego@rocketseat.com.br>',
  to: 'Eu mesmo <diego@rocketseat.com.br>',
  subject: 'Testando Mailhog',
  html: '<h1>Funcionou!</h1>'
})