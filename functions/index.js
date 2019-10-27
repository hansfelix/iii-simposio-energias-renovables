const path = require("path");
const fs = require("fs");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const hbs = require("handlebars");

admin.initializeApp();

const sendMails = require('./mailing');

exports.sendMails = sendMails;
