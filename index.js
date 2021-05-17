"use strict"

const http = require('http');

const reportManager = require('./components/ReportManager');

const server = http.createServer((req, res) => {
    const { headers, method, url } = req;
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const reportData = JSON.parse(Buffer.concat(body).toString());

        const ReportManager = new reportManager('report_by_votes')
        ReportManager.parseHeader();
     //   ReportManager.parseData(reportData);


    });


});
server.listen(8000);