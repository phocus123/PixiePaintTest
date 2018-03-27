const functions = require('firebase-functions');

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
  `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`
);

exports.sendContactMessage = functions.database
  .ref('/messages/{pushKey}')
  .onWrite(event => {
    const snapshot = event.data;

    // Only send email for new messages.
    if (snapshot.previous.val()) {
      return;
    }

    const val = snapshot.val();

    const mailOptions = {
      to: 'hello@pixiepaint.com.au',
      subject: `Enquiry from ${val.email}`,
      html: val.html
    };

    return mailTransport.sendMail(mailOptions).then(() => {
      return console.log('hello@pixiepaint.com.au');
    });
  });
