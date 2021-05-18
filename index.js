"use strict"

require('dotenv').config()

const http = require('http');
const PORT = process.env.PORT || 8000;

const reportManager = require('./components/ReportManager');

const server = http.createServer((req, res) => {
    const {headers, method, url} = req;
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const reportData = JSON.parse(Buffer.concat(body).toString());
        const ReportManager = new reportManager()
        ReportManager.parseData(reportData);

    });
});

server.listen(PORT);