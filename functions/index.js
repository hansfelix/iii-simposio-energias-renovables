const path = require("path");
const fs = require("fs");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const hbs = require("handlebars");

admin.initializeApp();

/**
* Configuración del handlebar
*/
const renderHTML = function (data) {
    const filepath = path.join(__dirname, "template", "/email-lead.hbs");
    var html = fs.readFileSync(filepath, 'utf8');
    return hbs.compile(html)(data);
};

/**
* Configuración del nodemailer
*/
let transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: { user: 'ser@udep.pe', pass: 'Udep2018' },
});

const mailOptions = {
    from: 'III Simposio de Energías Renovables <ser@udep.pe>',
    to: '', // Cambiar
    subject: 'Invitación al III Simposio de Energías Renovables',
    html: ""
};



// Listen for changes in all documents in the 'leads' collection
exports.useWildcard = functions.firestore
    .document('leads/{leadId}')
    .onCreate((change, context) => {

        // Modificar Options
        mailOptions.to = change.data().email;
        mailOptions.html = renderHTML({
            name: "Hans",
            address: "",
            email: change.data().email
        });

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Sended');
        })

    });
