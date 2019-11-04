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
    bcc: 'e.m.c.onuno10@gmail.com, gian.ydrogo@ieee.org',
    subject: 'Pre-registro al III Simposio de Energías Renovables',
    html: ""
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const sendMails = functions.firestore.document('leads/{leadId}')
    .onCreate(async (change, context) => {
        // Escribir el lead en Google Sheet
        let newLead = {
            'Tipo de participante': change.data().tipo,
            'Nombres y apellidos': change.data().nombre,
            'Correo electrónico': change.data().email,
            'Celular': change.data().celular,
            'Horario de llamada': change.data().horarioLlamada,
            'Aceptó términos y condiciones': change.data().aceptaTyC ? 'Si' : 'No',
            'Observaciones': ''
        }
        console.log("Nuevo Lead: ", newLead)


        // Envío de correo
        if (validateEmail(change.data().email)) {
            mailOptions.to = change.data().email;
            mailOptions.html = renderHTML({
                name: change.data().nombre,
                email: change.data().email
            });

            await transporter.sendMail(mailOptions);
        }

        writeLead(newLead);

        // Debe retornar un Promise
        return Promise.resolve('Exito')
    });


const sendMails = functions.firestore.document('leads/{leadId}')
    .onCreate(async (change, context) => {
        // Escribir el lead en Google Sheet
        let newLead = {
            'Tipo de participante': change.data().tipo,
            'Nombres y apellidos': change.data().nombre,
            'Correo electrónico': change.data().email,
            'Celular': change.data().celular,
            'Horario de llamada': change.data().horarioLlamada,
            'Aceptó términos y condiciones': change.data().aceptaTyC ? 'Si' : 'No',
            'Observaciones': ''
        }
        console.log("Nuevo Lead: ", newLead)


        // Envío de correo
        if (validateEmail(change.data().email)) {
            mailOptions.to = change.data().email;
            mailOptions.html = renderHTML({
                name: change.data().nombre,
                email: change.data().email
            });

            await transporter.sendMail(mailOptions);
        }

        writeLead(newLead);

        // Debe retornar un Promise
        return Promise.resolve('Exito')
    });

module.exports = sendMails;