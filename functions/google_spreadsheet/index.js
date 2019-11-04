const fs = require('fs');
// const readline = require('readline');
// const { google } = require('googleapis');
// const request = require('request');
const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('./client_secret.json');


function writeLead(newRow) {
    // Id del google Sheet a escribir
    let doc = new GoogleSpreadsheet('1Hlii8D-7-sL2RKRQqzxQGkfwSkvUEUENz5TJzeP1mGE');
    console.log(doc.useServiceAccountAuth)

    // Authentication
    doc.useServiceAccountAuth(creds, function (err) {

        let sheet;

        doc.getInfo(function (err, info) {
            console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
            sheet = info.worksheets[0]

            // Setea la cabecera del sheet / Solo de ejemplo
            // sheet.setHeaderRow([
            //     'Fecha de envío',
            //     'Tipo de participante',
            //     'Nombres y apellidos',
            //     'Correo electrónico',
            //     'Celular',
            //     'Horario de llamada',
            //     'Aceptó términos y condiciones'
            // ]);

            //Añadir una nueva fila
            newRow['Fecha de envío'] = new Date(Date.now()).toLocaleString("en-US", { timeZone: "America/Lima" });
            sheet.addRow(newRow, function (err, rows) {
                console.log(err)
                console.log(rows)
            });
        });
    });
}


function writeRegistered(newRow) {
    // Id del google Sheet a escribir
    let doc = new GoogleSpreadsheet('1Hlii8D-7-sL2RKRQqzxQGkfwSkvUEUENz5TJzeP1mGE');
    console.log(doc.useServiceAccountAuth)

    // Authentication
    doc.useServiceAccountAuth(creds, function (err) {

        let sheet;

        doc.getInfo(function (err, info) {
            console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
            sheet = info.worksheets[1]

            // Setea la cabecera del sheet / Solo de ejemplo
            // sheet.setHeaderRow([
            //     'Fecha de envío',
            //     'Tipo de participante',
            //     'Nombres y apellidos',
            //     'Correo electrónico',
            //     'Celular',
            //     'Horario de llamada',
            //     'Aceptó términos y condiciones'
            // ]);

            //Añadir una nueva fila
            newRow['Fecha de envío'] = new Date(Date.now()).toLocaleString("en-US", { timeZone: "America/Lima" });
            sheet.addRow(newRow, function (err, rows) {
                console.log(err)
                console.log(rows)
            });
        });
    });
}


module.exports = { writeLead, writeRegistered };
// writeLead({ 'Tipo de participante': 'Estudiante', 'Nombres y apellidos': 'hanFSs' });