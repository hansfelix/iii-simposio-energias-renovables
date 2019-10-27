const path = require("path");
const fs = require("fs");
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const hbs = require("handlebars");

const writeLead = require('../google_spreadsheet')

// Configuración del handlebar
const renderHTML = function (data) {
    const filepath = path.join(__dirname, "./template-email-lead.hbs");
    var html = fs.readFileSync(filepath, 'utf8');
    return hbs.compile(html)(data);
};

// Configuración del nodemailer
let transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: { user: 'ser@udep.pe', pass: 'Udep2018' },
});

// MailOptions
const mailOptions = {
    from: 'III Simposio de Energías Renovables <ser@udep.pe>',
    to: '', // Cambiar
    subject: 'Pre-registro al III Simposio de Energías Renovables',
    html: ""
};


const sendMails = functions.firestore.document('leads/{leadId}')
    .onCreate((change, context) => {
        // Escribir el lead en Google Sheet
        let newLead = {
            'Tipo de participante': change.data().tipo,
            'Nombres y apellidos': change.data().nombre,
            'Correo electrónico': change.data().email,
            'Celular': change.data().celular,
            'Horario de llamada': change.data().horarioLlamada,
            'Aceptó términos y condiciones': change.data().aceptaTyC ? 'Si' : 'No',
        }
        console.log("newLead", newLead)
        writeLead(newLead);

        // Modificar Options
        mailOptions.to = change.data().email;
        mailOptions.html = renderHTML({
            name: change.data().nombre,
            email: change.data().email
        });

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error', error);
                return Promise.reject(error)
            }
            console.log('Sended');
        })

        // Debe retornar un Promise
        return Promise.resolve('Exito')
    });

module.exports = sendMails;