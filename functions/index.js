const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();

/**
* Configuración del nodemailer
*/
let transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: { user: 'ser@udep.pe', pass: 'Udep2018' },
});

const mailOptions = {
    from: 'III Simposio de Energías Renovables <ser@udep.pe>',
    to: 'hansfelix50@gmail.com', // Cambiar
    subject: 'I\'M A PICKLE!!!', // email subject
    html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
        <br />
        <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
    ` // email content in HTML
};


// Listen for changes in all documents in the 'leads' collection
exports.useWildcard = functions.firestore
    .document('leads/{leadId}')
    .onCreate((change, context) => {

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Sended');
        })

    });
